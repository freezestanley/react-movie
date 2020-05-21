/* eslint-disable import/prefer-default-export */
import request from '@/utils/request';

export function queryProduct({ source='H5', ...rest }) {
  return request({
    url: '/queryProduct',
    serve: 'product',
    method: 'GET',
    headers: {
      source
    },
    data: rest,
  });
}

export function eventList({ source='H5', ...rest }) {
  return request({
    url: '/eventList',
    serve: 'seckill',
    method: 'GET',
    headers: {
      source
    },
    data: rest,
  });
}