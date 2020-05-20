import React from 'react';
import styles from  './index.less'
export default ()=>{
  return(
    <div className={styles.charge}>
      <div>
        <span>充值失败</span>
      </div>
      <div>
        <div className={styles.orderdetail_title}>腾讯视频会员+盎司会员白金卡</div>
        <div  className={styles.orderdetail_container}>
          <div>
            <span>订单号</span>
            <span></span>
          </div>
          <div>
            <span>充值账号</span>
            <span>11</span>
          </div>
          <div>
            <span>产品规格</span>
            <span>111</span>
          </div>
          <div>
            <span>原价</span>
            <span></span>
          </div>
          <div>
            <span>会员价</span>
            <span></span>
          </div>
          <div>
            <span>会员费</span>
            <span></span>
          </div>
          <div>
            <span>实际支付</span>
            <span></span>
          </div>
          <div>
            <span>时间</span>
            <span></span>
          </div>
         
         
        </div>
        <div className={styles.contact}>

          <div>联系客服</div>
        </div>

      </div>
    </div>
  )
}