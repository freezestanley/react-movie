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

// 创建并支付订单
export function createAndPay(data) {
  return request({
    url: '/createAndPay',
    serve: 'order',
    method: 'POST',
    data,
  });
}

// 查询订单
export function queryOrders(data) {
  return request({
    url: '/pageListOrder',
    serve: 'order',
    method: 'POST',
    data
  });
}