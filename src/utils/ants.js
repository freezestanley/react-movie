import { Toast } from 'zarm';

const notNull = data => data !== null;

// 更新redux中的商品信息
export const updateProductInfo = (props) => {
  !props.isUpdateProductInfo && props.dispatch({
    type: 'global/setState',
    payload: { isUpdateProductInfo: true },
  })
}

// 商品角标
const fmtMask = num => num ? `${`${(num * 100).toFixed(2)}`.replace(/(0)*(\.)*0*$/, '')}折起` : '';
export const productCornerMark = (data = [], isVIP, isOpenVIP) => {
  let minVip = 1, minActivity = 1;
  let hasPrice = false;
  data.forEach(item => {
    // item.eventPrice = null;
    // item.membershipPrice = null;
    if (notNull(item.eventPrice)) {
      hasPrice = true;
      minActivity = minActivity ? Math.min(minActivity, item.eventDiscount) : item.eventDiscount;
    }
    if (notNull(item.membershipPrice)) {
      hasPrice = true;
      minVip = minVip ? Math.min(minVip, item.membershipDiscount) : item.membershipDiscount;
    }
  })

  if (hasPrice) {
    // 是VIP，活动折扣和会员折扣取最小
    if (isVIP) {
      return fmtMask(Math.min(minVip, minActivity));
    } else { // 非VIP
      // 是否开通VIP
      if (isOpenVIP) {
        return fmtMask(minVip === 1 ? null : minVip);
      }
      return fmtMask(minActivity === 1 ? null : minActivity);
    }
  } else {
    return null;
  }
}

// 计算最优价格(原价，活动价，VIP)
export const paymentAmount = (data = {}, isVIP, isOpenVIP) => {
  if (!data) return {};

  // 非VIP
  if (!isVIP) {
    // 活动价或者原价
    if (isOpenVIP) { // 开通VIP
      if (notNull(data.membershipPrice)) { // 会员价
        return { price: data.membershipPrice, type: 'vip' };
      }
    }
    if (notNull(data.eventPrice)) {
      return { price: data.eventPrice, type: 'activity' }
    }
    return { price: data.price, type: 'original' }
  }
  // data.membershipPrice = 9;

  // 是VIP
  // 如果有活动
  if (notNull(data.eventPrice)) {
    if (notNull(data.membershipPrice)) {
      if (data.eventPrice > data.membershipPrice) {
        return { price: data.membershipPrice, type: 'vip' }
      }
    }
    return { price: data.eventPrice, type: 'activity' };
  }
  if (notNull(data.membershipPrice)) {
    if (data.membershipPrice < data.price) {
      return { price: data.membershipPrice, type: 'vip' };
    }
  }
  return { price: data.price, type: 'original' };
}

export const diffMoney = (data) => (notNull(data.membershipPrice)
  ? +(data.price - data.membershipPrice).toFixed(2) : 0);

export const vipDiscount = (data) => (data ? `${(data * 100).toFixed(2)}`.replace(/(0)*(\.)*0*$/, '') : '-');

export const formatMoney = (value, isSymbol) => {
  if (isSymbol) {
    return value ? `￥${value}` : '¥0';
  }
  return value ? `${value} 元` : '0元';
}

// 账号类型
export const formatAccountStr = (account, type) => {
  let str = '';
  switch (account) {
    case 1: str = 'QQ号'; break;
    case 2: str = '手机号'; break;
    case 3: str = '微信号'; break;
    case 4: str = '微博昵称'; break;
    case 5: str = '抖音号'; break;
    case 6: str = '斗鱼昵称'; break;
    case 7:
      return [
        {
          title: '战网商品通行证',
          placeholder: '请输入战网商品通行证',
          type: 7,
          required: false,
        },
        {
          title: '魔兽世界账号',
          placeholder: '请输入魔兽世界账号',
          type: 7,
          required: true,
        },
      ];
    default: break;
  }
  if (!type) {
    return `请输入${str}`;
  }
  if (type === 'name') {
    return str;
  }
};

// 账号校验
export const formValidate = (data, type) => {
  if (type === 1) {
    const val = data.account;
    if (!val) {
      Toast.show(formatAccountStr(data.accountType));
      return false;
    }
    switch (data.accountType) {
      case 1:
        if (!/[1-9][0-9]{4,}/.test(val)) {
          Toast.show('QQ号不合法');
          return false;
        }
        return true;
      case 2:
        if (!/^1\d{10}$/.test(val)) {
          Toast.show('手机号码格式错误');
          return false;
        }
        return true;
      default: return true;
    }
  }
  return true;
}

export const isQQ = type => type === 1;

export const getStatusClassName = (status) => {
  let result = '';
  switch (status) {
    case 1:
      result = '';
      break;
    case 2:
      result = 'success-fix';
      break;
    case 5:
      result = 'success-fix';
      break;
    case 3:
      result = 'fail-fix';
      break;
    case 4:
      result = 'expire-fix';
      break;
    case 6:
      result = 'expire-fix';
      break;
    case 7:
      result = 'expire-fix';
      break;
    case 8:
      result = 'expire-fix';
      break;
    case 9:
      result = 'expire-fix';
      break;
    case 10:
      result = 'expire-fix';
      break;
    case 11:
      result = 'expire-fix';
      break;
    default:

  }
  return result;
};

export const formatOrderStatus = (status) => {
  let result = '已取消';
  switch (status) {
    case 1:
      result = '待支付';
      break;
    case 2:
      result = '已支付';
      break;
    case 5:
      result = '已完成';
      break;
    case 3:
      result = '支付失败';
      break;
    case 4:
      result = '已取消';
      break;
    case 6:
      result = '充值失败';
      break;
    case 7:
      result = '已退款';
      break;
    case 8:
      result = '部分退款';
      break;
    case 9:
      result = '部分成功';
      break;
    case 10:
      result = '退款中';
      break;
    case 11:
      result = '退款失败';
      break;
    default:
      break;
  }
  return result;
};

export const formatSaleStatus = (status) => {
  let result = '已售罄';
  switch (status) {
    case 2:
      result = '即将开始';
      break;
    case 1:
      result = '马上抢';
      break;
    case 3:
      result = '已售罄';
      break;
    case 4:
      result = '已结束';
      break;
    default:
      result = '已售罄';
      break;
  }
  return result;
}

// 秒杀倒计时时间计算, 返回秒
export function getSeckillDuration(detail) {
  const { beginTimestamp, currTimestamp, endTimestamp } = detail
  let seconds = null
  if (beginTimestamp >= currTimestamp) {
    return Math.ceil((beginTimestamp - currTimestamp) / 1000);
  }
  if (currTimestamp <= endTimestamp) {
    return Math.ceil((endTimestamp - currTimestamp) / 1000);
  }
  return seconds
}

// 判定是否为会员单
export function isPureMemberOrder({ productItemName, rechargeAccount }) {
  return !productItemName && !rechargeAccount
}

export function xFlowSendEvent({eventType='', eventValue='', eventDesc=''}){
  try {
    if (window._maEvt) {
      window._maEvt.push([eventType,eventValue,eventDesc]);
    }
  } catch(e){
    console.log('xflow发送事件报错！');
  }
}