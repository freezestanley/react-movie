import React from 'react'

import styles from './index.less'

const ActivityCard = props => {
  return (
    <div className={styles['acitivity-card']}>
      <div className={styles['main-part']}>
        <div className={styles['right-top']}></div>
        <div className={styles['card-title']}>Q币限时秒杀</div>
        <div className={styles['card-description']}>5折特惠秒杀，限时专享</div>
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