import React from 'react';
import styles from './index.less'
export default (nfo)=>{
  let info=nfo.info
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
  console.log(info.productList)
  return(
    <div className={styles.orderdetail}>
      <div className={styles.orderdetail_title}>{info.productName}</div>
      <div  className={styles.orderdetail_container}>
        <div>
          <span>订单号</span>
          <span>{info.orderId}</span>
        </div>
        <div>
          <span>充值账号</span>
          <span>{info.rechargeAccount}</span>
        </div>
        <div>
          <span>产品规格</span>
          <span>{info.productItemName}</span>
        </div>
        <div>
          <span>原价</span>
          <span>{info.productOriginalPrice}</span>
        </div>
        <div>
          <span>会员价</span>
          <span>{info.memberAmount}</span>
        </div>
        <div>
          <span>会员费</span>
          <span>{info.memberPrice}</span>
        </div>
        <div>
          <span>实际支付</span>
          <span>{info.totalAmount||''}</span>
        </div>
        <div>
          <span>时间</span>
          <span>{(new Date(info.orderTime)).Format('yy-MM-dd')}</span>
        </div>
      </div>
    </div>

  )
}