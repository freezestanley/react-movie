/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useReducer } from 'react';
import { paymentAmount } from '@/utils/ants';

import SpecItem from '../SpecItem';
import './index.less';

export default function SpecGroup(props) {
  const data = props.dataSource || [];
  const [state, setState] = useReducer((o, n) => ({...o, ...n}), {
    active: 0,
  })
  // 用来被依赖从而解决切换产品时首个选中item的数据更新
  const firtItemName = (data && data[0] || {}).name
  // console.log('[29] index.jsx: ', props);
  const handleChange = (idx, item) => {
    if (idx !== state.active) {
      setState({ active: idx })
      props.onChange && props.onChange(idx, item)
    }
  }
  useEffect(() => {
    props.onChange && props.onChange(state.active, data[state.active])
  }, [firtItemName]) // eslint-disable-line
  return (
    <div className="spec-group">
      {data.map((item, idx) => {
        const payPrice = paymentAmount(item, props.isVIP, props.isOpenVIP);
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