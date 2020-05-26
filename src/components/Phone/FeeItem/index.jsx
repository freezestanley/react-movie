import React from 'react';
import cns from 'classnames';
import { fmtPrice } from '@/utils/tools';

import './index.less';

export default function FeeItem(props) {
  const { column=2, index, onChange, active } = props;
  const handleChange = () => {
    onChange && onChange(index);
  }
  const gapCount = column - 1;
  const isLastItem = index % column  === gapCount;
  const extraStyle = { width: `${(100 - gapCount * 2) / column}%` };
  if (isLastItem) {
    extraStyle.marginRight = 0;
  }
  return (
    <div
      className={cns('spec-item', { active })}
      onClick={handleChange}
      style={extraStyle}
    >
      <div>
        <div className="spec-item-price" dangerouslySetInnerHTML={{ __html: fmtPrice(props.price, 'tag') }} />
        {props.price && <div className="spec-item-original-phone">原价 {props.name}</div>}
        {props.active && <img className="spec-item-check-ico" src={require('./check-ico.svg')} alt="" />}
      </div>
    </div>
  );
}