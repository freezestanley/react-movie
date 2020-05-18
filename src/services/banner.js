/* eslint-disable import/prefer-default-export */
import request from '@/utils/request';

export function getBanners({ userid, ...rest }) {
  return request({
    url: '/selectBannersByPage',
    serve: 'banner',
    method: 'POST',
    header: {
      userid
    },
    data: rest,
  });
}