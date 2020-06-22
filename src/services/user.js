import request from '@/utils/request';

// 发送验证码
export function sendCode(data) {
  return request({
    url: `/sms/send/${data}`,
    method: 'POST',
    serve: 'user',
  });
}