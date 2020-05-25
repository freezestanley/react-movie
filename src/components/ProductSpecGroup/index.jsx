import React, { useEffect, useReducer } from 'react';
import cns from 'classnames';


import './index.less';

export default function ProductSpecGroup({ onChange, className, children }) {
  const [state, setState] = useReducer((o, n) => ({ ...o, ...n }), {
    tab: '0',
  })
  useEffect(() => {
    onChange && onChange(state.tab);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const imgURL = (tabKey) => require(`./img/tab-bg${state.tab === tabKey ? '-active' : ''}.png`);
  const handleTab = (key) => {
    setState({ tab: key })
    onChange && onChange(key)
  }
  return (
    <div className={cns('product_spec_group', className)}>
      <div className="product_spec_box">
        <div className="product_spec_tab">
          <div className="tab_l tab_item" onClick={() => handleTab('0')}>
            <img src={imgURL('0')} alt=""/>
            <div className="tab_item_title">VIP会员</div>
          </div>
          <div className="tab_r tab_item" onClick={() => handleTab('1')}>
            <img src={imgURL('1')} alt=""/>
            <div className="tab_item_title">超级影视会员</div>
          </div>
          <div className="product_spec_cont">
            {typeof children === 'function' ? children(state.tab) : children}
          </div>
        </div>
      </div>
    </div>
  )
}