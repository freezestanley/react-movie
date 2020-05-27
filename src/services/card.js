/* eslint-disable import/prefer-default-export */
import request from '@/utils/request';

export function getCard({ ...rest }) {
    debugger
  return request({
    url: '/query',
    serve: 'card',
    method: 'GET',
    data: rest
  });
}