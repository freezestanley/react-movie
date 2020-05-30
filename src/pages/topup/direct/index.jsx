/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useReducer } from 'react';
import SpecAndVIP from '@/components/SpecAndVIP';
import SwitchAccount from '@/components/SwitchAccount';
import MulitAccount from '@/components/MulitAccount';

export default function DirectPage(props) {
  const { defaultValue = {} } = props;
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

  const handleMulitAccount = (data) => {
    if (data.accountType === 7) {
      setState({
        ...data,
        account: [data.account0 || '', data.account1 || '']
      });
    }
  }

  const _type = props.accountTypeList[0] || 0;

  return (
    <div>
      {/* tabKey-{props.tabKey} */}
      {(_type^7) ? (
        <SwitchAccount
          defaultValue={props.defaultValue}
          onChange={handleAccount}
          accountTypeList={props.accountTypeList}
          dispatch={props.dispatch}
          isUpdateProductInfo={props.isUpdateProductInfo}
        />
      ) : null}
      {/* 魔兽世界 */}
      {_type === 7 && (
        <MulitAccount
          defaultValue={props.defaultValue}
          accountType={_type}
          onChange={handleMulitAccount}
          dispatch={props.dispatch}
          isUpdateProductInfo={props.isUpdateProductInfo}
        />
      )}
      <SpecAndVIP
        // prePay={props.prePay}
        dataSource={props.productSpecItems}
        onChange={handleSpec}
        defaultValue={{
          specIndex: defaultValue.specIndex,
          isOpenVIP: defaultValue.isOpenVIP,
        }}
      />
    </div>
  );
}