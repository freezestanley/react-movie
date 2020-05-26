/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useReducer } from 'react';
import SpecAndVIP from '@/components/SpecAndVIP';
import SwitchAccount from '@/components/SwitchAccount';

export default function DirectPage(props) {
  const [state, setState] = useReducer((o, n) => ({ ...o, ...n}), {
    isOpenVIP: false,
    specIndex: 0,
    specInfo: {},
    account: '',
    accountType: null,
    vipPrice: null,
    savePrice: null,
  });

  useEffect(() => {
    props.onChange && props.onChange(state)
  }, [JSON.stringify(state)])

  const handleSpec = (specData) => {
    setState({ ...specData })
  }
  const handleAccount = (e) => {
    setState({
      account: e.account,
      accountType: e.accountType,
    })
  }

  return (
    <div>
      {/* tabKey-{props.tabKey} */}
      <SwitchAccount
        onChange={handleAccount}
        accountTypeList={props.accountTypeList}
      />
      <SpecAndVIP
        dataSource={props.productSpecItems}
        onChange={handleSpec}
      />
    </div>
  );
}