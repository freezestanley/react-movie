import React from 'react';
import styles from './index.less'
import CardCharge from '@/components/CardCharge'
import OrderDetails from '@/components/OrderDetails';

export default()=>{
  return(

    <div className={styles.myorder}>

      <div className={styles.pay}>
        <span className={styles.span_1}>待支付</span>
        <span  className={styles.span_2}>1000元</span>

      </div>
      <div className={styles.paytime}>
        <div>04 : 58</div>
        <div>等待付款，秒杀折扣将为您保留至倒计时结束</div>

      </div>
     

     
      <OrderDetails/>
      <CardCharge/>

    </div>
  )
}