import { Toast } from 'zarm';

export function isJSON(obj) {
  try {
    JSON.parse(obj);
    return true;
  } catch (e) {
    return false;
  }
}

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

export const cookie = {
  set(name, value, days, path) {
    let expires = '';
    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = `; expires=${date.toGMTString()}`;
    }

    const dir = path || '/';
    document.cookie = `${name}=${value}${expires}; path=${dir}`;
  },
  get(name) {
    const nameEQ = `${name}=`;
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i += 1) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1, c.length);
      }
      if (c.indexOf(nameEQ) === 0) {
        return c.substring(nameEQ.length, c.length);
      }
    }
    return '';
  },
  remove(name) {
    this.set(name, '', -1);
  },
};

export const Store = {
  set(key, value) {
    switch (typeof value) {
      case 'string': localStorage.setItem(key, value); break;
      case 'object': localStorage.setItem(key, JSON.stringify(value)); break;
      default: new Error('Invalid');
    }
  },
  get(key) {
    const value = localStorage.getItem(key);
    if (isJSON(value)) {
      return JSON.parse(value)
    }
    return value;
  }
}

export const isPhone = (data, hasToast = true) => {
  const isOk = /^1\d{10}$/.test(data);
  if (!isOk && hasToast) Toast.show('手机号码格式错误');
  return isOk;
}

export const BrowserInfo = {
  isAndroid: Boolean(navigator.userAgent.match(/android/gi)),
  isIphone: Boolean(navigator.userAgent.match(/iphone|ipod/gi)),
  isIpad: Boolean(navigator.userAgent.match(/ipad/gi)),
  isWeixin: Boolean(navigator.userAgent.match(/MicroMessenger/gi)),
  isAli: Boolean(navigator.userAgent.match(/AlipayClient/gi)),
  isPhone: Boolean(/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)),
  // isRunningStandalone:
  isPWA: navigator.standalone || window.matchMedia('(display-mode: standalone)').matches,
};

export const wxClass = name => !BrowserInfo.isWeixin ? `wx__${name}` : '';
