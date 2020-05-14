import request from '@/utils/request';

// 微信登录
export function wxLogin(data) {
  return request({
    url: '/userLogin',
    method: 'POST',
    serve: 'ance',
    data,
  });
}

// 手机验证码登录
export function login(data) {
  return request({
    url: '/login',
    method: 'POST',
    serve: 'user',
    data,
  });
}

export function sendCode(data) {
  return request({
    url: `/sms/send/${data}`,
    method: 'POST',
    serve: 'user',
  });
}