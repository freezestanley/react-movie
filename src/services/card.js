/* eslint-disable import/prefer-default-export */
import request from '@/utils/request';

export function getCard({ ...rest }) {
  return request({
    url: '/queryUserView',
    serve: 'card',
    method: 'GET',
    data: rest
  });
}

export function exchangeCard({ ...rest }) {
  return request({
    url: '/exchange',
    serve: 'card',
    method: 'POST',
    data: rest
  });
}