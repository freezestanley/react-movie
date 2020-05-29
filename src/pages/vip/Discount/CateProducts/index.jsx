import React from 'react';
import styles from './index.module.less';

const cates = new Array(3).fill().map((item, idx) => {
  return {
    id: idx + 1,
    name: `分类-${idx + 1}`,
    products: new Array(10).fill().map((item, idx) => {
      return {
        id: idx + 1,
        name: `商品-${idx + 1}`,
        logo:
          'https://za-www-prd.oss-cn-hzfinance.aliyuncs.com/2d641a0a-e76b-441f-8ce2-93ecadbde5a1Q币.png',
      };
    }),
  };
});

export default () => {
  return (
    <div>
      {cates.map(cate => {
        return (
          <div key={cate.id} className={styles['cate']}>
            <div className={styles['cate-name']}>{cate.name}</div>
            <div className={styles['cate-product-list']}>
              {cate.products.map(product => {
                return (
                  <div key={product.id} className={styles['cate-product-item']}>
                    <img className={styles['product-logo']} src={product.logo} />
                    <div className={styles['product-name']}>{product.name}</div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
