import React from 'react'

import styles from './index.less'
import brand from '@/assets/brand.png'
const ActivityCard = props => {
  return (
    <div className={styles['acitivity-card']}>
      <div className={styles['main-part']}>
        <div className={styles['right-top']}></div>
        <img src={brand} className={styles['brand']} />

        <div className={styles['card-title']}>{props.data.activityName}</div>
        <div className={styles['card-description']}>{props.data.description}</div>
        <div className={styles['price-box']}>
          <div className={styles['now-price']}><span className={styles['yuan']}>￥</span>274</div>
          <div className={styles['origin-price']}>￥498</div>
        </div>
      </div>
      <div className={styles['bottom-part']}>
        <div className={styles['rest']}>剩余30件</div>
        <div className={styles['progress']}>
          <div className={styles['progress-value']} style={{width:props.data.percent * 100 + '%'}}></div>
        </div>
      </div>
    </div>
  )
}
export default ActivityCard