import request from '@/utils/request';

// 微信登录
export function wxLogin(data) {
  return request({
    url: '/getOpenId',
    method: 'POST',
    serve: 'user',
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

// 发送验证码
export function sendCode(data) {
  return request({
    url: `/sms/send/${data}`,
    method: 'POST',
    serve: 'user',
  });
}

// 验证是否注册
export function checkRegistered(data) {
  return request({
    url: `/checkRegist?mobileNumber=${data}`,
    method: 'GET',
    serve: 'user',
  });
}

// 获取用户信息
export function getUserInfo(data) {
  return request({
    url: `/`,
    method: 'GET',
    serve: 'user',
  });
}