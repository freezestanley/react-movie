import React from 'react';
import styles from './rec.less'
import brand from '@/assets/brand.png'
export default (props ) => {
  
  return (
    <div className={styles['acitivity-card']}>
      <div className={styles['main-part']}>
        <div className={styles['right-top']}></div>
        <img src={brand} className={styles['brand']} alt="" />

        <div className={styles['card-title']}>Q币限时秒杀</div>
        <div className={styles['card-description']}>
          <span className={styles['member-discount']}>会员优惠</span>
        
        </div>
        <div className={styles['price-box']}>
          <div className={styles['now-price']}><span className={styles['yuan']}>￥</span>274</div>
          <div className={styles['origin-price']}>￥498</div>
        </div>
      </div>
      <div className={styles['bottom-part']}>
        
      </div>
    </div>
  )
}