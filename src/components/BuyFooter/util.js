
import { paymentAmount } from '@/utils/ants';
import { fmtPrice } from '@/utils/tools';
import superCodePay from '@/utils/handlePay';
import * as services from '@/services/order';
import * as seckillService from '@/services/seckill';
//  价格展示逻辑
export const getTotalPrice = ({ main={}, type, attach, isVIP }) => {
  let price = 0;
  switch(type) {
    case 'product':
      const { specInfo={}, isOpenVIP, vipPrice }  = main;
      price = paymentAmount(specInfo, isVIP, isOpenVIP).price + (isOpenVIP ? vipPrice : 0);
      price = fmtPrice(price, 'number');
      break;
    case 'phone':
      price = (main.price || 0) + (attach.payPrice || 0);
      break;
    case 'seckill':
      price = (main.discountPrice || 0);
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
        attachProductName: `${attach.title}${attach.productItemName}`,
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

export async function createSeckillOrder ({ data, dispatch, callback }) {
  const { eventCode } = data;
  const registerRes = await seckillService.registerSeckill({ eventCode});
  console.log('----registerRes', registerRes);
  const orderKeyRes = await services.getSeckillOrderKey({ eventCode });
  console.log('----orderKeyRes', orderKeyRes);
  // if (orderKeyRes) {
  //   services.createSeckillOrder({})
  // }
  // const payAmount = fmtPrice((main.price || 0) + (attach.payPrice || 0), 'number');
  // const formData = {
  //   productId: main.productId,
  //   productItemId: main.id,
  //   quantity: 1,
  //   appendAccountType: 2,
  //   appendProductId: attach.id,
  //   appendProductItemId: attach.productItemId,
  //   appendQuantity: 1,
  //   payType: 1,
  //   rechargeAccount	: main.rechargeAccount,
  //   payAmount
  // };
  // superCodePay({ dispatch, formData: data, callback });
}
