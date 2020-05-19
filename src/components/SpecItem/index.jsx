import React from 'react';
import cns from 'classnames';
import { fmtPrice } from '@/utils/tools';

import './index.less';

export default function SpecItem(props) {
  const handleChange = () => {
    props.onChange && props.onChange(props.index);
  }
  return (
    <div
      className={cns('spec-item', `u-1of${props.column || 2}`, { active: props.active })}
      onClick={handleChange}
    >
      <div>
        <div className="spec-item-name">{props.name}</div>
        <div className="spec-item-price" dangerouslySetInnerHTML={{ __html: fmtPrice(props.payPrice, 'tag') }} />
        {props.price && <div className="spec-item-original">原价 {fmtPrice(props.price)}</div>}
        {props.subText && <div className="spec-item-tag">{props.subText}</div>}
        {props.active && <img className="spec-item-check-ico" src={require('./check-ico.svg')} alt="" />}
      </div>
    </div>
  );
}