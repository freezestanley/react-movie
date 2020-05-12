import { Toast } from 'zarm';

export const Query = {
  parse(search = window.location.search) {
    if (!search) return;
    const hashes = search.slice(search.indexOf('?') + 1).split('&');
    return hashes.reduce((acc, hash) => {
      const [key, val] = hash.split('=');
      return { ...acc, [key]: decodeURIComponent(val) };
    }, {});
  },

  get(key) {
    const params = this.parse(window.location.search);
    if (params) {
      return params[key];
    }
  },

  stringify(query) {
    const str = Object.keys(query)
      .map(key => `${key}=${encodeURIComponent(query[key] || '')}`)
      .join('&');
    return str;
  },
};

export const isPhone = (data, hasToast = true) => {
  const isOk = /^1\d{10}$/.test(data);
  if (!isOk && hasToast) Toast.show('手机号码格式错误');
  return isOk;
}