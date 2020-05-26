/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useReducer } from 'react';
import { Checkbox } from 'zarm';
import { connect } from 'dva';
import { fmtPrice } from '@/utils/tools';
import Corner from '../Corner';

import './index.less';

function OpenVIP(props) {
  const { onChange, value = false, savePrice = 0, vipPrice } = props;
  const [state, setState] = useReducer((o, n) => ({...o, ...n}), {
    checked: false,
    membershipInfo: {},
  })
  // console.log('[16] index.jsx: ', props);

  useEffect(() => {
    onChange && onChange(state.checked)
    setState({ checked: value })
  }, [value])

  // 会员价格信息
  useEffect(() => {
    const data = props.membershipList;
    if (data.length > 0) {
      setState({ membershipInfo: data[0] })
    }
  }, [props.membershipList])

  useEffect(() => {
    props.dispatch({ type: 'user/getMembershipList' })
  }, [])

  const handleChange = () => {
    // const val = e.target.checked;
    const val = !state.checked;
    setState({ checked: val });
    onChange && onChange({
      isOpenVIP: val,
      vipPrice: val ? state.membershipInfo.lowerPrice : null,
      savePrice: val ? savePrice : null,
    });
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
            <div className="t3">本单立省{fmtPrice(savePrice, 'CN')}</div>
          </div>
          <div className="t4" onClick={handleChange}>
            <span className="t4-1" dangerouslySetInnerHTML={{ __html: fmtPrice(vipPrice || state.membershipInfo.lowerPrice, 'tag') }} />
            <Corner className="time-limit">限时</Corner>
            <Checkbox className="open-vip-check" checked={state.checked} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default connect(state => state.user)(OpenVIP);