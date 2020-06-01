
import { paymentAmount } from '@/utils/ants';
import { fmtPrice } from '@/utils/tools';
import isEmpty from 'lodash/isEmpty';
import superCodePay, { reLanchPay } from '@/utils/handlePay';
import * as services from '@/services/order';
import * as seckillService from '@/services/seckill';
//  价格展示逻辑
export const getTotalPrice = ({ main={}, type, attach, isVIP }) => {
  let price = 0;
  switch(type) {
    case 'product':
      const { specInfo={}, isOpenVIP, vipPrice }  = main;
      price = paymentAmount(specInfo, isVIP, isOpenVIP).price + ((isOpenVIP && !isVIP) ? vipPrice : 0);
      price = fmtPrice(price, 'number');
      break;
    case 'phone':
      price = (main.price || 0) + (attach.payPrice || 0);
      break;
    case 'seckill':
      price = (main.discountPrice || 0);
      break;
    case 'order': 
      price = main.payAmount;
      break;
    default:
      break;
  }
  return price
}

// 优惠信息弹框
export const getDiscountInfo = ({ main, type, attach, isVIP }) => {
  let data = {};
  switch(type) {
    case 'product':
      const { specInfo={}, isOpenVIP, vipPrice }  = main;
      const { eventDiscount, membershipDiscount, name, price } = specInfo;
      const { price: payPrice, type: priceType } = paymentAmount(specInfo, isVIP, isOpenVIP);
      data = {
        type,
        itemName: name,
        originPrice: price,
        discountAmount: payPrice - price
      };
      if (priceType === 'activity') {
        data.discount = eventDiscount;
        data.discountLabel = '活动价';
      }
      if (priceType === 'vip') {
        data.discount = membershipDiscount;
        data.discountLabel = '会员价';
      }
      if (isOpenVIP) {
        data.vipPrice=vipPrice
      }
      break;
    case 'phone':
      data = {
        type,
        itemName: main.name,
        originPrice: main.price,
        attachProductName: isEmpty(attach) ? '' : `${attach.title}${attach.productItemName}`,
        attachPrice: attach.payPrice
      };
      break;
    case 'seckill':
      data = {
        type,
        itemName: main.itemName,
        originPrice: main.originPrice,
        discountLabel: '秒杀价',
        discountAmount: main.discountPrice - main.originPrice,
        discount: main.discount
      };
      break;
    default:
      break;
  }
  return data;
}


export function createPhoneOrder ({ data, dispatch, callback }) {
  const { main, attach } = data;
  const payAmount = fmtPrice((main.price || 0) + (attach.payPrice || 0), 'number');
  const formData = {
    productId: main.productId,
    productItemId: main.id,
    quantity: 1,
    appendAccountType: 2,
    appendProductId: attach.id,
    appendProductItemId: attach.productItemId,
    appendQuantity: 1,
    payType: 1,
    rechargeAccount	: main.rechargeAccount,
    payAmount
  };
  superCodePay({ dispatch, formData, callback });
}

export function createProductOrder({ data, dispatch, callback }) {
  const formData = {
    productId: data.productId, // 商品id
    productItemId: data.specInfo.id, // 规格id
    buyMember: data.isOpenVIP ? 1 : 0, // 是否购买会员 0：否 1：是 默认否
    payAmount: data.payPrice, // 支付金额
    payType: 1, // 支付方式 1：微信 2：支付宝
    quantity: 1, // 数量
    // rechargeAccount: data.account, // 充值账户
    // accountType: data.accountType, // 账号类型
  };

  if (data.type === 1) {
    formData.rechargeAccount = data.account; // 充值账户
    formData.accountType = data.accountType; // 账号类型
  }

  // console.log('[create order]: ', formData);
  superCodePay({ dispatch, formData, callback });
}

// 创建秒杀订单～
export async function createSeckillOrder ({ data, dispatch, callback }) {
  const { eventCode, itemId, productId, discountPrice } = data;
  const registerRes = await seckillService.registerSeckill({ eventCode});
  if (registerRes.code === '0000' && registerRes.success) {
    const orderKeyRes = await services.getSeckillOrderKey({ eventCode });
    if (orderKeyRes.code === '0000' && orderKeyRes.data) {
      const orderKey = orderKeyRes.data;
      const formData = {
        orderKey,
        eventCode,
        itemId,
        productId,
        payAmount: discountPrice,
        quantity: 1,
        payType: 1
      };
      superCodePay({ dispatch, type: 'order/createSeckillOrderAndPay',  formData, callback });
    }
  }
}

// 重新支付
export function rePayOrder ({ data, dispatch, callback }) {
  const { orderId } = data;
  const formData = { orderId, payType: 1 };
  reLanchPay({ dispatch, type: 'order/relaunchPay', formData, callback });
}
