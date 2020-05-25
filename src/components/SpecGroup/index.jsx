import React, { useEffect, useReducer } from 'react';
import { paymentAmount } from '@/utils/ants';

import SpecItem from '../SpecItem';
import './index.less';

export default function SpecGroup(props) {
  const data = props.dataSource || [];
  const [state, setState] = useReducer((o, n) => ({...o, ...n}), {
    active: 0,
  })
  // console.log('[29] index.jsx: ', props);
  const handleChange = (idx, item) => {
    if (idx !== state.active) {
      setState({ active: idx })
      props.onChange && props.onChange(idx, item)
    }
  }
  useEffect(() => {
    props.onChange && props.onChange(state.active, data[state.active])
  }, [])
  return (
    <div className="spec-group">
      {data.map((item, idx) => {
        const payPrice = paymentAmount(item, props.isVIP, props.isOpenVIP);
        // console.log('[33] index.jsx: ', payPrice);
        return (
          <SpecItem
            key={idx}
            index={idx}
            column={props.column}
            dataSource={item}
            active={state.active === idx}
            onChange={handleChange}
            name={item.name}
            payPrice={payPrice.price}
            price={item.price}
            subText={item.bottomCornerMark}
          />
        )
      })}
    </div>
  );
}