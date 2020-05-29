import React, { useMemo } from 'react';
import { vipDiscount } from '@/utils/ants';
import styles from './index.less';

export default ({ info }) => {
  const percentage = useMemo(() => {
    const sell = ((info.quantity - info.stock) / info.quantity) * 100;
    return 60 + sell * 0.4;
  }, [info]);

  return (
    <div className={styles['product']}>
      <div className={styles['price']}>
        <div className={styles['price-container']}>
          <div className={styles['price-inner']}>
            <div className={styles['price-content']}>
              <div className={styles['price-current']}>
                ￥<span className={styles['price-current-value']}>{info.discountPrice}</span>
              </div>
              <div className={styles['price-original']}>
                原价￥<span>{info.originPrice}</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles['price-discount']}>{vipDiscount(info.discount)}折</div>
      </div>
      <div className={styles['main']}>
        <div className={styles['main-inner']}>
          <div className={styles['name']}>
            {info.productName}
            {info.itemName}
          </div>
          <div className={styles['gift']}>暂无</div>
          <div className={styles['stock']}>
            <div className={styles['stock-value']}>
              {percentage === 100 ? '已售罄' : `${parseInt(percentage)}%`}
            </div>
            <div className={styles['stock-progress']} style={{ width: `${percentage}%` }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};
