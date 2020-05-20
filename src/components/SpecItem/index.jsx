import React from 'react';
import cns from 'classnames';
import { fmtPrice } from '@/utils/tools';

import './index.less';

export default function SpecItem(props) {
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
        {props.name && <div className="spec-item-name">{props.name}</div>}
        <div className="spec-item-price" dangerouslySetInnerHTML={{ __html: fmtPrice(props.payPrice, 'tag') }} />
        {props.price && <div className="spec-item-original">原价 {fmtPrice(props.price)}</div>}
        {props.subText && <div className="spec-item-tag"><span>{props.subText}</span></div>}
        {props.active && <img className="spec-item-check-ico" src={require('./check-ico.svg')} alt="" />}
      </div>
    </div>
  );
}