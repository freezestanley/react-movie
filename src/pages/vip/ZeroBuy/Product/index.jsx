import React from 'react';
import styles from './index.module.less';

export default ({ name, logo, price }) => {
  return (
    <div className={styles['product']}>
      <div className={styles['name']}>
        {name}
        <span className={styles['tag']}>会员专享</span>
      </div>
      <div className={styles['price']}>
        <div className={styles['price-current']}>
          <span className={styles['price-current-value']}>￥</span>
          <span className={styles['price-current-unit']}>0</span>
        </div>
        <div className={styles['price-original']}>￥{price}</div>
      </div>
    </div>
  );
};
