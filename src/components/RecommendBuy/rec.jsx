import React from 'react';
import styles from './rec.less'
import router from 'umi/router';
export default (props ) => {
  const allData=props.info
  const data=allData.bannerItem || {}
  return (
    <div className={styles['acitivity-card']} onClick={() => router.push(allData.bannerLinkUrl)} >
      <div className={styles['main-part']}>
        <div className={styles['right-top']}></div>
        <img src={data.productImage} className={styles['brand']} alt="" />
        <div className={styles['card-title']}>{data.productName}</div>
        <div className={styles['card-description']}>
          <span className={styles['member-discount']}>会员专享</span>
        </div>
        <div className={styles['price-box']}>
          <div className={styles['now-price']}><span className={styles['yuan']}>￥</span>{data.price}</div>
          <div className={styles['origin-price']}>￥499</div>
        </div>
      </div>
      <div className={styles['bottom-part']}> 
      </div>
    </div>
  )
}