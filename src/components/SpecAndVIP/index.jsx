/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useReducer } from 'react';
import { connect } from 'dva';
import { updateProductInfo } from '@/utils/ants';

import SpecGroup from '../SpecGroup';
import OpenVIP from '../OpenVIP';

function SpecAndVIP(props) {
  const { onOpenVIP, dispatch, order, user, defaultValue = {}, ...rest } = props;
  const [state, setState] = useReducer((o, n) => ({...o, ...n}), {
    specIndex: 0,
    specInfo: {},
    isOpenVIP: false,
    hasVipPrice: true,
    vipPrice: null,
    savePrice: null,
  })

  const handleOpenVIP = (data) => {
    setState({ ...data });
  }

  const handleSpec = (active, record, isChange) => {
    setState({
      specIndex: active,
      specInfo: record,
      hasVipPrice: record.membershipPrice !== null,
    });

    isChange && updateProductInfo(props);
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
      {!order.hasVipOrder && !user.isVIP && state.hasVipPrice && (
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