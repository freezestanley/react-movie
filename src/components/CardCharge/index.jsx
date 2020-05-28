import React from 'react';
import dayjs from 'dayjs'

import styles from './index.less';

export default (props)=>{
  const {orderCardList}=props.info
  console.log(orderCardList)
  return(
    <div className ={styles.cardcharge}>
      <div>
        <span>{orderCardList[0]&&orderCardList[0].productName}</span>
        <span> 有效期至：{dayjs(orderCardList[0]&&orderCardList[0].expiredTime).format('YYYY-MM-DD')}</span>
      </div>
      <div> 激活方式：请通过"订单详情"页面点击链接备份激活方式：请通过"订单详情"页面点击链接备份</div>
      <div>
        <span>卡号</span>
        <span>{orderCardList[0]&&orderCardList[0].giftNo.slice(orderCardList[0].giftNo.indexOf(':')+1)}</span>
        <span>复制</span>
      </div>
      <div>
        <span>卡密</span>
       
        <span>{orderCardList[0]&&(orderCardList[0].giftSecret.slice(orderCardList[0].giftSecret.indexOf(":")+1))}</span>
        <span>复制</span>
      </div>
    </div>
  )
}