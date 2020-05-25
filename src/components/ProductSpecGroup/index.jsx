import React, { useEffect, useReducer } from 'react';
import cns from 'classnames';


import './index.less';

export default function ProductSpecGroup({ onChange, className, children, dataSource }) {
  const [state, setState] = useReducer((o, n) => ({ ...o, ...n }), {
    tab: '0',
  })
  useEffect(() => {
    onChange && onChange(state.tab);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const imgURL = (tabKey) => require(`./img/tab-bg${state.tab === tabKey ? '-active' : ''}.png`);
  const handleTab = (key) => {
    if (key !== state.tab ) {
      setState({ tab: key })
      onChange && onChange(key)
    }
  }
  return dataSource.length > 0 && dataSource.length <= 2 && (
    <div className={cns('product_spec_group', className, { single: !dataSource[1] })}>
      <div className="product_spec_box">
        <div className="product_spec_tab">
          <div className="tab_l tab_item" onClick={() => handleTab('0')}>
            <img src={imgURL('0')} alt=""/>
            <div className="tab_item_title">{dataSource[0].categoryName}</div>
          </div>
          {dataSource[1] && (
            <div className="tab_r tab_item" onClick={() => handleTab('1')}>
              <img src={imgURL('1')} alt=""/>
              <div className="tab_item_title">{dataSource[1].categoryName}</div>
            </div>
          )}
          <div className="product_spec_cont">
            {typeof children === 'function' ? children(state.tab) : children}
          </div>
        </div>
      </div>
    </div>
  )
}