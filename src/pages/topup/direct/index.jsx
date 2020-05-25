/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useReducer } from 'react';
import SpecAndVIP from '@/components/SpecAndVIP';
import SwitchAccount from '@/components/SwitchAccount';

export default function DirectPage(props) {
  const [state, setState] = useReducer((o, n) => ({ ...o, ...n}), {
    specIndex: 0,
    specInfo: {},
    account: '',
    accountType: null,
  });

  useEffect(() => {
    props.onChange && props.onChange(state)
  }, [state.specIndex, state.accountType, state.account])

  const handleSpec = (active, record) => {
    setState({
      specIndex: active,
      specInfo: record,
    })
  }
  const handleAccount = (e) => {
    setState({
      account: e.account,
      accountType: e.accountType,
    })
  }
  return (
    <div>
      tabKey-{props.tabKey}
      <SwitchAccount
        onChange={handleAccount}
        accountTypeList={props.accountTypeList}
      />
      <SpecAndVIP
        dataSource={props.productItems}
        isVIP={props.isVIP}
        onOpenVIP={props.onOpenVIP}
        onChange={handleSpec}
      />
    </div>
  );
}