import request from '@/utils/request';

export function wxLogin(data) {
  return request({
    url: '/userLogin',
    serve: 'ance',
    method: 'POST',
    data,
  });
}

export function login(data) {
  return request({
    url: '/api/login',
    method: 'POST',
    data,
  });
}