/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { connect } from 'dva';
import SpecGroup from '../SpecGroup';
import OpenVIP from '../OpenVIP';

function SpecAndVIP(props) {
  const { onOpenVIP, dispatch, order, user, ...rest } = props;
  const [isOpenVIP, setOpenVIP] = useState(false);
  const handleOpenVIP = (e) => {
    setOpenVIP(e);
    onOpenVIP && onOpenVIP(e);
  }

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
      <SpecGroup {...rest} isOpenVIP={isOpenVIP} />
      {!order.hasVipOrder && <OpenVIP {...rest} onChange={handleOpenVIP} />}
    </div>
  )
}

export default connect(state => ({ order: state.order, user: state.user }))(SpecAndVIP)