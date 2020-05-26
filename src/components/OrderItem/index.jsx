import React from 'react';
import styles from './index.less';
export default ( {onClick})=>{
  const mock={
    paystate:3//1待支付 2 充值失败 3 已支付 4 失效
  }
  return(
    <div className={styles.order} onClick={onClick}>
      <div className={styles.order_up}>
        <div className={styles.order_head}>
          <img  alt=''/>
          <span className={styles.span_1}>腾讯视屏会员+盎司会员卡白金</span>
          <div className={styles.pay}>
            {mock.paystate==1&&(<span className={styles.unpaid}>待支付 </span>)}
            {mock.paystate==2&&(<span className={styles.chagrefailed}>充值失败</span>)}
            {mock.paystate==3&&(<span className={styles.paid}>已支付</span>)}
            {mock.paystate==4&&(<span className={styles.outtime}>已失效</span> )}
            </div>
        </div>
        <p className={styles.up_p}>¥ 22</p>
        <div className={styles.details}>
          <p className={styles.details_p1}>订单 : 2827266666654</p>
          <p className={styles.details_p1}>时间 : 2020-05-20 19:20</p>
          <p className={styles.details_p1}>规格 : 月卡 </p>
        </div>
      </div>
      {mock.paystate!=4&&(<div className={styles.order_down}>
        <div>
          {mock.paystate==1&&( <span className={styles.recharge}>支付</span> )}
          {mock.paystate==2&&(<span className={styles.concat}>联系客服</span>)}
          {mock.paystate==3&&(<span className={styles.check}>查看卡密</span>)}
        </div>
      </div>)}
  </div>
  )
}