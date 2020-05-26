
import { paymentAmount } from '@/utils/ants';
import { superCodePayV1 } from '@/utils/handlePay';
//  价格展示逻辑
export const getTotalPrice = ({ main={}, type, attach, isVIP }) => {
  let price = 0;
  switch(type) {
    case 'product': 
      const { specInfo={}, isOpenVIP, vipPrice }  = main;
      price = paymentAmount(specInfo, isVIP, isOpenVIP).price + (isOpenVIP ? vipPrice : 0);
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
  const type = 'order/createAndPay'
  const { main, attach } = data;
  console.log('----attach', attach);
  const payAmount = (main.price || 0) + (attach.payPrice || 0)
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
  superCodePayV1({ dispatch, type, formData, callback });
}