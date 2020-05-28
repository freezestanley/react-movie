/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useReducer } from 'react';
import { connect } from 'dva';

import SpecGroup from '../SpecGroup';
import OpenVIP from '../OpenVIP';

function SpecAndVIP(props) {
  const { onOpenVIP, dispatch, order, user, ...rest } = props;
  const [state, setState] = useReducer((o, n) => ({...o, ...n}), {
    specIndex: 0,
    specInfo: {},
    isOpenVIP: false,
    vipPrice: null,
    savePrice: null,
  })

  const handleOpenVIP = (data) => {
    setState({ ...data });
  }

  const handleSpec = (active, record) => {
    setState({
      specIndex: active,
      specInfo: record,
    });
  }

  useEffect(() => {
     props.onChange && props.onChange(state);
     console.log('------ssss')
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
      <SpecGroup {...rest} isOpenVIP={state.isOpenVIP} onChange={handleSpec} />
      {!order.hasVipOrder && !user.isVIP && (
        <OpenVIP
          {...rest}
          // savePrice={state.savePrice}
          specInfo={state.specInfo}
          onChange={handleOpenVIP}
        />
      )}
    </div>
  )
}

export default connect(state => ({ order: state.order, user: state.user }))(SpecAndVIP)