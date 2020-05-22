import React, { useMemo } from 'react';
import styles from './index.less';

export default ({ info }) => {
  const percentage = useMemo(() => {
    return info.stock / info.quantity;
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
        <div className={styles['price-discount']}>{info.discount * 10}折</div>
      </div>
      <div className={styles['main']}>
        <div className={styles['main-inner']}>
          <div className={styles['name']}>
            {info.productName}
            {info.itemName}
          </div>
          <div className={styles['gift']}>暂无</div>
          <div className={styles['stock']}>
            <div className={styles['stock-value']}>剩余{info.stock}件</div>
            <div
              className={styles['stock-progress']}
              style={{ width: `${percentage * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};
