/* eslint-disable import/prefer-default-export */
import request from '@/utils/request';

// 获取商品信息
export function queryProduct(data) {
  return request({
    url: '/queryProduct',
    serve: 'product',
    method: 'GET',
    data,
  });
}

export function eventList(data) {
  return request({
    url: '/eventList',
    serve: 'seckill',
    method: 'GET',
    data,
  });
}

// 获取商品规格
export function getProductItems(data) {
  return request({
    url: '/queryProductItems',
    serve: 'product',
    method: 'GET',
    data: {
      status: 2,
      productId: data,
    },
  })
}