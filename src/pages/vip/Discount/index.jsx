import React, { useCallback, useState } from 'react';
import Product from './Product';
import CateProducts from './CateProducts';
import styles from './index.module.less';

const products = new Array(8).fill().map((item, idx) => {
  const id = idx + 1;
  return {
    id,
    logo:
      'https://za-www-prd.oss-cn-hzfinance.aliyuncs.com/576bd8ad-cb4e-443a-8abc-56a0968fdd5f%E8%85%BE%E8%AE%AF%E8%A7%86%E9%A2%91.png',
    name: `Q币充值`,
    desc: '5折秒杀',
  };
});

export default () => {
  const getMore = useCallback(() => {}, []);
  const [opened, setOpened] = useState(false);

  return (
    <div>
      <div className={styles['product-list']}>
        {products.map((p, idx) => {
          return (
            <div key={idx} className={styles['product-item']}>
              <Product {...p} />
            </div>
          );
        })}
      </div>
      {opened && (
        <div className={styles['more-products']}>
          <CateProducts />
        </div>
      )}
      {/* <div className={styles['more']} onClick={() => setOpened(!opened)}>
        {opened ? '收起' : '查看更多'}
      </div> */}
    </div>
  );
};
