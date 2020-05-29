import request from '@/utils/request';

// 微信权限签名验签
export function wxSignSignature(data) {
  return request({
    url: '/signSignature',
    serve: 'ance',
    method: 'POST',
    data,
  }).then(res => {
    if (res.code === '0000') {
      return [true, res.data];
    } else {
      return [false, res.msg]
    }
  });
}