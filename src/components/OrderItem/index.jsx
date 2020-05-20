import React from 'react';
import styles from './index.less';
export default ( {onClick})=>{
  return(
    <div className={styles.order} onClick={onClick}>
      <div className={styles.order_up}>
        <div className={styles.order_head}>
          <img  alt=''/>
          <span className={styles.span_1}>腾讯视屏会员+蜜蜂会员卡白金</span>
          <span className={styles.span_2}>待支付</span>
        </div>
        <p className={styles.up_p}>¥22</p>

        <div className={styles.details}>
          <p className={styles.details_p1}>订单 :</p>
          <p className={styles.details_p1}>时间 :</p>
          <p className={styles.details_p1}>规格 :</p>

        </div>
      </div>
      <div className={styles.order_down}> 
        <div>
           <span>支付</span>
        </div>
       
      </div>
  </div>
  )
}