import React from 'react';
import ProductInfo from '../ProductInfo';

import './index.less';

export default function ProductHead({ bgUrl, ...rest }) {
  const bgImg = bgUrl ? bgUrl : require('@/assets/product-bg.png');
  return (
    <div className="product_spec_prodinfo">
      <img className="product_spec_bg" src={bgImg} alt="" />
      <div className="prod_info">
        {/* TODO: product info */}
        <ProductInfo {...rest} />
      </div>
    </div>
  )
}