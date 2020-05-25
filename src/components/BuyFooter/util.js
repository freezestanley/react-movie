//  价格展示逻辑
export const getTotalPrice = ({ main={}, type, attach }) => {
  let price = 0;
  switch(type) {
    case 'product': 
      const { specInfo={}, isOpenVIP, vipPrice }  = main;
      const { eventPrice, membershipPrice, price: originPrice} = specInfo;
      price = (Math.min(eventPrice || 0, membershipPrice || 0) || originPrice) + (isOpenVIP ? vipPrice : 0);
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
export const getDiscountInfo = ({ main, type, attach }) => {
  let data = {};
  switch(type) {
    case 'product':
      const { specInfo={}, isOpenVIP, vipPrice }  = main;
      const { eventPrice, eventDiscount, membershipPrice, membershipDiscount, name, price } = specInfo;
      const isShouldShowEventPrice = eventPrice >= 0 && eventPrice < membershipPrice;
      const isShouldMemberPrice = membershipPrice >= 0 && membershipPrice < eventPrice
      data = {
        type,
        itemName: name,
        originPrice: price,
      };
      if (isShouldShowEventPrice) {
        data.discountAmount = eventPrice - price;
        data.discount = eventDiscount;
        data.discountLabel = '活动价';
      }
      if (isShouldMemberPrice) {
        data.discountAmount = membershipPrice - price;
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
