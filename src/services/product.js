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

// 获取商品列表
export function queryProducts(data) {
  return request({
    url: '/queryProducts',
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
    url: '/queryProductItemsGroupByCategory',
    serve: 'product',
    method: 'GET',
    data: {
      status: 2,
      productId: data,
    },
  });
}
// 获取加购商品规格
export function queryAdditionalProductItems(data) {
  return request({
    url: '/queryAdditionalProductItems',
    serve: 'product',
    method: 'GET',
    data,
  });
}

// 获取商品分类
export function queryProductsGroupByCategory() {
  return request({
    url: '/queryProductsGroupByCategory',
    serve: 'product',
    method: 'GET',
    data: {},
  });
}
