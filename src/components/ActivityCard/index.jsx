import React from 'react'

import styles from './index.less'
import brand from '@/assets/brand.png'
const ActivityCard = props => {
  let progress = 0;
  if(props.data.stock !== 0){
    const sell = ((props.data.quantity-props.data.stock)/props.data.quantity) * 100;
    progress = 60 + (sell * 0.4);
  }
  return (
    <div className={styles['acitivity-card']}>
      <div className={styles['main-part']}>
        <div className={styles['right-top']}></div>
        <img src={brand} className={styles['brand']} alt="" />

        <div className={styles['card-title']}>{props.data.eventName}</div>
      
        <div className={styles['card-description']}>
          {
           props.data.limitBuy &&  <span className={styles['member-discount']}>会员优惠</span>
         
          }
          {props.data.description}
        </div>
        <div className={styles['price-box']}>
          <div className={styles['now-price']}><span className={styles['yuan']}>￥</span>274</div>
          <div className={styles['origin-price']}>￥498</div>
        </div>
      </div>
      <div className={styles['bottom-part']}>
        <div className={styles['rest']}>{props.data.stock === 0 ? '已售罄' :`剩余${props.data.stock}件`}</div>
        <div className={styles['progress']}>
          <div className={styles['progress-value']} style={{width: progress + '%'}}></div>
        </div>
      </div>
    </div>
  )
}
export default ActivityCard