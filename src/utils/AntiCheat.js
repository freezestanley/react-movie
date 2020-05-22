
const isPrd = /vip.zhongan.io$/.test(window.location.origin);
const superCodeURL = isPrd ? 'https://vpc-af.zhongan.io' : 'https://vpc-test-af.zhongan.io';

export const createAntiCheat = function({ dispatch, type = 'charge/createOrder', formData, callback }) {
  window.__SuperCode && window.__SuperCode.show({
    serverDomain: superCodeURL,
    onSuccess(data) {
      const _data = data.data;
      dispatch({
        type: type,
        payload: {
          ...formData,
          did: _data.did,
          sid: _data.scene,
          token: _data.token,
        },
      }).then(res => callback(res))
    }
  })
}