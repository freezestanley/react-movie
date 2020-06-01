import { Toast } from 'zarm';
import numeral from 'numeral';
import dayjs from 'dayjs';

export function mapRouter(oData) {
  const _routes = [];
  function _mapRouter(data) {
    // console.log('[12] index.jsx: ', data);
    if (Array.isArray(data)) {
      data.forEach(item => {
        if (item.path) {
          if (item.routes && Array.isArray(item.routes)) {
            item.routes.forEach((item2) => {
              if (item2.path && !item2.routes) {
                _routes.push(item2);
              } else {
                _mapRouter(item2);
              }
            })
          } else {
            _routes.push(item);
          }
        }
      })
    }
  }
  _mapRouter(oData);
  return _routes;
}

export const fmtPrice = (data, type) => {
  // if (data < 0 || !/[\d.]/.test(data)) {
  //   return `¥0`;
  // }
  const price = numeral(data).format('0.00').replace(/(\.00?)?0?$/, '');
  const _price = price < 0 ? '-' : price;
  if (type === 'number') {
    return price < 0 ? null : +price;
  }
  if (type === 'CN') {
    return `${_price}元`
  }
  return type === 'tag'
    ? `${price < 0 ? '-': ''}<i class="money-symbol">¥</i><span>${Math.abs(price)}</span>`
    : (price < 0 ? `-¥${Math.abs(price)}` : `¥${price}`);
}

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
      case 'object': localStorage.setItem(key, JSON.stringify(value)); break;
      default: localStorage.setItem(key, value); break;
      // default: new Error('Invalid');
    }
  },
  get(key) {
    const value = localStorage.getItem(key);
    if (isJSON(value)) {
      return JSON.parse(value)
    }
    return value;
  },
  remove(key) {
    localStorage.removeItem(key);
  },
}

export const Session = {
  set(key, value) {
    switch (typeof value) {
      case 'object': sessionStorage.setItem(key, JSON.stringify(value)); break;
      default: sessionStorage.setItem(key, value); break;
      // default: new Error('Invalid');
    }
  },
  get(key) {
    const value = sessionStorage.getItem(key);
    if (isJSON(value)) {
      return JSON.parse(value)
    }
    return value;
  },
  remove(key) {
    sessionStorage.removeItem(key);
  },
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

export const isWX = BrowserInfo.isWeixin;

export const wxClass = name => !BrowserInfo.isWeixin ? `wx__${name}` : '';

export const textURL = (str, text) => str ? str.replace(/((https?|http|ftp|file):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|])/g, `<a class="text__url" href="$1">${text || '$1'}</a>`) : '';

export const isHttpText = (value) => /((https?|http|ftp|file):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|])/g.test(value);

export const getOffsetTop = (targetEl) => {
  let offsetTop = 0
  while (targetEl) {
    offsetTop += targetEl.offsetTop
    targetEl = targetEl.offsetParent
  }
  return offsetTop
}

export const getOffsetTopBy = (targetEl, parentEl) => {
  let offsetTop = 0
  while (targetEl !== parentEl) {
    offsetTop += targetEl.offsetTop
    targetEl = targetEl.offsetParent
  }
  return offsetTop
}

/**
 * 
 * @param {*} t Date() or timestamp
 * @param {*} type  default datetime
 */ 
export const formatDate = (t,type='YYYY-MM-DD HH:mm:ss') => {
  if(!t) return t;
  return dayjs(t).format(type)
}

export const getSourcePageStr = () => {
  const { pathname, search } = window.location;
  return window.encodeURIComponent(`${pathname}${search}`);
};
export const phoneMask = (str) => {
  let pat=/(\d{3})\d*(\d{4})/
  let result =str.replace(pat,'$1****$2');
  return result;
}