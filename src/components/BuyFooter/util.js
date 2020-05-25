//  价格展示逻辑
export const getTotalPrice = ({ main, type, attach }) => {
  let price = 0;
  switch(type) {
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
        discountAmount: main.discountPrice - main.originPrice,
        discount: main.discount
      };
      break;
    default: 
      break;
  }
  return data;
}
