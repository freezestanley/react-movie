import React from 'react';
import BuyFooter from '@/components/BuyFooter';
import CardPage from './card';
import DirectPage from './direct';

import styles from './index.less';


export default function TopupPage(props) {
  const currentProduct = {
    // type: Math.random() > 0.5 ? 1 : 2,
    type: 1,
  };
  return (
    <div className={styles.buyFooterPage}>
      {currentProduct.type === 1 && <DirectPage />}
      {currentProduct.type === 2 && <CardPage />}
      <BuyFooter />
    </div>
  );
}