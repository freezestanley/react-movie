import React, { useReducer } from 'react';
import cns from 'classnames';
import { ProductHead } from '../Product';

import './index.less';

export default function ProductSpecGroup(props) {
  const [state, setState] = useReducer((o, n) => ({ ...o, ...n }), {
    tab: 'left',
  })
  const imgURL = (tabKey) => require(`./img/tab-bg${state.tab === tabKey ? '-active' : ''}.png`);
  const handleTab = (key) => {
    setState({ tab: key })
  }
  return (
    <div className={cns('product_spec_group', props.className)}>
      <ProductHead
        corner="95折起"
        title="腾讯视频蜜蜂会员七五折起"
        desc="不负好时光，月卡年卡任你挑"
      />
      <div className="product_spec_box">
        <div className="product_spec_tab">
          <div className="tab_l tab_item" onClick={() => handleTab('left')}>
            <img src={imgURL('left')} alt=""/>
            <div className="tab_item_title">超级影视会员</div>
          </div>
          <div className="tab_r tab_item" onClick={() => handleTab('right')}>
            <img src={imgURL('right')} alt=""/>
            <div className="tab_item_title">超级影视会员</div>
          </div>
          <div className="product_spec_cont">{props.children(state.tab)}</div>
        </div>
      </div>
    </div>
  )
}