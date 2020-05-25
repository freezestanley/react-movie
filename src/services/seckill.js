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