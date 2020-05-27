import React from 'react';
import styles from './index.less';
export default ( {info})=>{
  Date.prototype.Format=function(fmt){
  var o = {
          "M+": this.getMonth() + 1, // 月份
          "d+": this.getDate(), // 日
          "h+": this.getHours(), // 小时
          "m+": this.getMinutes(), // 分
          "s+": this.getSeconds(), // 秒
          "q+": Math.floor((this.getMonth() + 3) / 3), // 季度
          "S": this.getMilliseconds() // 毫秒
  };
  if (/(y+)/.test(fmt))
      fmt = fmt.replace(RegExp.$1, (this.getFullYear() + ""));
  for (var k in o)
      if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
}
  const time=new Date(info.orderTime).Format('yy-MM-dd hh:mm:ss')
  console.log(time)
  const mock={
    paystate:3//1待支付 2 充值失败 3 已支付 4 失效
  }
  return(
    <div className={styles.order} >
      <div className={styles.order_up}>
        <div className={styles.order_head}>
          <img  alt=''/>
          <span className={styles.span_1}>{info.productName}</span>
          <div className={styles.pay}>
            {mock.paystate===1&&(<span className={styles.unpaid}>待支付 </span>)} 
            {mock.paystate===2&&(<span className={styles.chagrefailed}>充值失败</span>)}
            {mock.paystate===3&&(<span className={styles.paid}>已支付</span>)}
            {mock.paystate===4&&(<span className={styles.outtime}>已失效</span> )}

            </div>
        </div>
        <p className={styles.up_p}>¥ 22</p>
        <div className={styles.details}>
          <p className={styles.details_p1}>订单 : {info.orderId}</p>
           <p className={styles.details_p1}>时间 : {time}</p>
          <p className={styles.details_p1}>规格 : 月卡 </p>
        </div>
      </div>
      {mock.paystate!==4&&(<div className={styles.order_down}>
        <div>
          {mock.paystate===1&&( <span className={styles.recharge}>支付</span> )}
          {mock.paystate===2&&(<span className={styles.concat}>联系客服</span>)}
          {mock.paystate===3&&(<span className={styles.check}>查看卡密</span>)}
        </div>
      </div>)}
  </div>
  )
}