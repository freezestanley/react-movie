/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useReducer } from 'react';
import { Checkbox } from 'zarm';
import { connect } from 'dva';
import { fmtPrice } from '@/utils/tools';
import { diffMoney } from '@/utils/ants';

import Corner from '../Corner';
import './index.less';

function OpenVIP(props) {
  const { onChange, value = false, savePrice = 0, vipPrice, specInfo } = props;
  const [state, setState] = useReducer((o, n) => ({...o, ...n}), {
    checked: false,
    membershipInfo: {},
  })

  useEffect(() => {
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

  useEffect(() => {
    onChange && onChange({
      isOpenVIP: state.checked,
      vipPrice: state.checked ? state.membershipInfo.lowerPrice : null,
      savePrice: state.checked ? diffMoney(specInfo) : null,
    });
  }, [state.checked, JSON.stringify(specInfo)])

  const handleChange = () => {
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