import React from 'react';
import router from 'umi/router'
import dayjs from 'dayjs'
import styles from './index.less';
export default ( {info})=>{
  let isShow
  let product1,product2
  if( info.productList.length==2){
    product1=info.productList[0]
    product2=info.productList[1]
    isShow=true
  }else{
    product1=info.productList[0]
    isShow=false;
  }
 
  return(
    <div className={styles.order}  >
      <div className={styles.order_up} onClick={() => router.push(`./orderdetail?id=${info.orderId}`)}>
        <div className={styles.order_head}>
          <img  src={info.productList[0].image}alt=''/>
          {(isShow&&!!(product2.image))&&(<img  src={info.productList[1].image} alt=''/>)}
          <span className={styles.span_1}>{product1.productName}{isShow&&(`+${product2.productName}`)}</span>
          <div className={styles.pay}>
            {info.status===1&&(<span className={styles.unpaid}>待支付 </span>)} 
            {info.status===3&&(<span className={styles.chagrefailed}>支付失败</span>)}
            {info.status===2&&(<span className={styles.paid}>已支付</span>)}
            {info.status===4&&(<span className={styles.outtime}>已失效</span> )}
            {info.status===5&&(<span className={styles.paid}>已完成</span> )}
            {info.status===6&&(<span className={styles.outtime}>充值失败</span> )}
            {info.status===7&&(<span className={styles.outtime}>已退款</span> )}
            {info.status===8&&(<span className={styles.outtime}>部分退款</span> )}
            {info.status===9&&(<span className={styles.outtime}>部分成功</span> )}
            {info.status===10&&(<span className={styles.outtime}>退款中</span> )}
            {info.status===11&&(<span className={styles.outtime}>款中失败</span> )}
            </div>
        </div>
          <p className={styles.up_p}>¥ {info.payAmount}</p>
        <div className={styles.details}>
          <p className={styles.details_p1}>订单 : {info.orderId}</p>
           <p className={styles.details_p2}>时间 : {dayjs(info.orderTime).format('YYYY-MM-DD HH:mm:ss')}</p>
          <p className={styles.details_p3}>规格 : {product1.productItemName} </p>
        </div>
      </div>
      {info.status!==4&&info.status!==5&&(<div className={styles.order_down}>
        <div>
          {info.status===1&&( <span className={styles.recharge}>支付</span> )}
          {info.staus===3&&(<span className={styles.concat}>联系客服</span>)}
          {info.status===2&&(<span className={styles.check} onClick={() => router.push(`./orderdetail?id=${info.orderId}`)}>查看卡密</span>)}
        </div>
      </div>)}
  </div>
  )
}