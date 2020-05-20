import React from 'react';
import Corner from '@/components/Corner';

import './index.less';

export default function ProductInfo({ title, desc, imgUrl, corner }) {
  const img = imgUrl ? require(imgUrl) : require('@/assets/logo.png');
  return (
    <div className="product_info_p1">
      <div className="product_info_p1_img">
        <img src={img} alt="" />
        {corner && <Corner>{corner}</Corner>}
      </div>
      <div className="product_info_p1_cont">
        <p className="t1">{title}</p>
        <p className="t2">{desc}</p>
      </div>
    </div>
  )
}