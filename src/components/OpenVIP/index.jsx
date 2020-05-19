import React, { useReducer } from 'react';
import { Checkbox } from 'zarm';
import { fmtPrice } from '@/utils/tools';
import Corner from '../Corner';

import './index.less';

export default function OpenVIP(props) {
  const [state, setState] = useReducer((o, n) => ({...o, ...n}), {
    checked: true,
  })
  const handleChange = e => {
    setState({ checked: !state.checked });
  }
  return (
    <div className="open-vip">
      <div className="open-vip-cont">
        <div className="t1">
          <span>开通立省，可与满减折扣同享</span>
          <img
            className="vip-tip"
            src={require('./img/tip.svg')}
            // TODO
            onClick={() => console.log('[vip tip]')}
            alt=""
          />
        </div>
        <div className="t-cont">
          <div>
            <div className="t2">白金卡</div><br />
            <div className="t3">本单立省23.44元</div>
          </div>
          <div className="t4" onClick={handleChange}>
            <span className="t4-1" dangerouslySetInnerHTML={{ __html: fmtPrice(9.9, 'tag') }} />
            <Corner className="time-limit">限时</Corner>
            <Checkbox className="open-vip-check" checked={state.checked} onChange={handleChange} />
          </div>
        </div>
      </div>
    </div>
  );
}