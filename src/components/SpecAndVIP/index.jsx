/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useReducer } from 'react';
import { connect } from 'dva';

import SpecGroup from '../SpecGroup';
import OpenVIP from '../OpenVIP';

function SpecAndVIP(props) {
  const { onOpenVIP, dispatch, order, user, defaultValue = {}, ...rest } = props;
  const [state, setState] = useReducer((o, n) => ({...o, ...n}), {
    specIndex: 0,
    specInfo: {},
    isOpenVIP: false,
    vipPrice: null,
    savePrice: null,
  })

  // 如果状态改变，则更新商品信息
  const updateState = () => {
    !props.isUpdateProductInfo && props.dispatch({
      type: 'global/setState',
      payload: { isUpdateProductInfo: true },
    })
  }

  const handleOpenVIP = (data) => {
    setState({ ...data });
  }

  const handleSpec = (active, record, isChange) => {
    setState({
      specIndex: active,
      specInfo: record,
    });

    isChange && updateState();
  }

  useEffect(() => {
     props.onChange && props.onChange(state);
  }, [JSON.stringify(state)])

  useEffect(() => {
    if (user.userId) {
      dispatch({
        type: 'order/checkMemberFlag',
        payload: user.userId,
      })
    }
  }, [user.userId])

  return (
    <div>
      <SpecGroup
        {...rest}
        onChange={handleSpec}
        isVIP={user.isVIP}
        isOpenVIP={defaultValue.isOpenVIP}
        index={defaultValue.specIndex}
      />
      {!order.hasVipOrder && !user.isVIP && (
        <OpenVIP
          {...rest}
          // savePrice={state.savePrice}
          specInfo={state.specInfo}
          onChange={handleOpenVIP}
          value={defaultValue.isOpenVIP}
        />
      )}
    </div>
  )
}

export default connect(state => ({
  order: state.order,
  user: state.user,
  isUpdateProductInfo: state.global.isUpdateProductInfo,
}))(SpecAndVIP)