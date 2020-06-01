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
  // console.log('-----location', location);
}