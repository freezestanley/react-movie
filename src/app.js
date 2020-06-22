import { BrowserInfo } from '@/utils/tools';
import { wechatShareConfig } from '@/utils/wechatShare';

export const dva = {
  config: {
    onError(err) {
      err.preventDefault();
      console.error(err.message);
    },
  },
};

// 路由变化钩子
export function onRouteChange({ location, routes, action }) {
  // Android微信分享
  // if (BrowserInfo.isAndroid) {
  //   wechatShareConfig();
  // }
}