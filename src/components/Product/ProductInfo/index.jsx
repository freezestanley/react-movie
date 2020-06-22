import React from 'react';
import Corner from '@/components/Corner';

import './index.less';

export default function ProductInfo({ description, imgUrl, corner }) {
  const img = imgUrl ? imgUrl : require('@/assets/logo.png');
  return (
    <div className="product_info_p1">
      <div className="product_info_p1_img">
        <img src={img} alt="" />
        {corner && <Corner>{corner}</Corner>}
      </div>
      <div className="product_info_p1_cont" dangerouslySetInnerHTML={{ __html: description }}>
      </div>
    </div>
  )
}