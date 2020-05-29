import React from 'react';

import './index.less';

export default function Card({ title, extra, children }) {
  return (
    <div className="z_card">
      <div className="z_card_head">
        <div className="z_card_title">{title}</div>
        {extra && <div className="z_card_extra">{extra}</div>}
      </div>
      <div className="z_card_cont">{children}</div>
    </div>
  )
}