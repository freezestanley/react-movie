import React from 'react';
import Product from './Product';
import styles from './index.module.less';

const products = new Array(2).fill().map((item, idx) => {
  return {
    id: 30,
    logo:
      'https://za-www-prd.oss-cn-hzfinance.aliyuncs.com/576bd8ad-cb4e-443a-8abc-56a0968fdd5f%E8%85%BE%E8%AE%AF%E8%A7%86%E9%A2%91.png',
    name: `泰康拜博口腔十项检查卡`,
    price: 388,
  };
});

export default () => {
  return (
    <div className={styles['product-list']}>
      {products.map((p, idx) => {
        return (
          <div key={idx} className={styles['product-item']}>
            <Product {...p} />
          </div>
        );
      })}
    </div>
  );
};
