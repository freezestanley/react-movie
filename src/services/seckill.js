/* eslint-disable import/prefer-default-export */
import request from '@/utils/request';

// 获取商品信息
export function querySeckillDetail({ id, ...rest }) {
  return request({
    url: `/eventDetail/${id}`,
    serve: 'seckill',
    method: 'GET',
    data: rest,
  });
}

// 预约秒杀活动
export function registerSeckill(params) {
  return request({
    url: `/seckill/register`,
    serve: 'charge',
    method: 'POST',
    data: params,
  });
}

// 查询秒杀库存
export function getStock({ eventCode }) {
  return request({
    url: `/seckill/getStock/${eventCode}`,
    serve: 'charge',
    method: 'GET',
    data: {},
  });
}
