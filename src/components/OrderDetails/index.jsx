import React from 'react';
import dayjs from 'dayjs';

import styles from './index.less'


export default ({ info = {}, productList = [] })=>{
  return(
    <div className={styles.orderdetail}>
      <div className={styles.orderdetail_title}>{productList[0] && productList[0]['productName']}{productList[1]&&`+${productList[1]['productItemName']}`}</div>
      <div  className={styles.orderdetail_container}>
        <div>
          <span>订单号</span>
          <span>{info.orderId}</span>
        </div>
        <div>
          <span>充值账号</span>
          <span>{productList[0] && productList[0]['rechargeAccount']}</span>
        </div>
        <div>
          <span>产品规格</span>
          <span>{productList[0] && productList[0]['productItemName']}</span>
        </div>
        <div>
          <span>原价</span>
          <span>{info.productOriginalPrice}</span>
        </div>
        {info.buyMenber&&<div>
          <span>会员价</span>
          <span>{info.memberAmount}</span>
        </div>}
        {info.buyMenber&&<div>
          <span>会员费</span>
          <span>{info.memberPrice}</span>
        </div>}
       { (productList[1])&& (<><div>
          <span>加购商品</span>
          <span>{productList[1]['productName']}</span>
        </div>
        <div>
          <span>商品价格</span>
          <span>{productList[1]['originalPrice']}</span>
        </div></>)}
        <div>
          <span>实际支付</span>
          <span>{info.totalAmount||''}</span>
        </div>
        <div>
          <span>时间</span>
          <span>{dayjs(info.orderTime).format('YYYY-MM-DD')}</span>
        </div>
      </div>
    </div>

  )
}