import React from 'react';
import { connect } from 'dva';
import superCodePay from '@/utils/handlePay';

export default connect(state => ({ user: state.user }))(function(props) {
  const { dispatch } = props;
  const buyVip = () => {
    const formData = {
      payAmount: 9.9,
      payType: 1
    }
    superCodePay({ dispatch, type: 'order/createMemberOrder',  formData, callback(){
      alert(1111);
    } });
  };
  return (<div>
    <div style={{ width: 200, hegiht: 30 }} onClick={buyVip}>购买VIP</div>
  </div>);
})