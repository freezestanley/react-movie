import React, { useEffect, useReducer } from 'react';
import { Input } from 'zarm';
import  { formatAccountStr, isQQ } from '@/utils/ants';


import './index.less';

function fmtList(data) {
  return data.map(i => ({
    label: formatAccountStr(i, 'name'),
    value: i,
  }))
}

export default function SwitchAccount(props) {
  const [state, setState] = useReducer((o, n) => ({ ...o, ...n }), {
    accountTypeList: [],
    accountTypeName: '',
    accountType: null,
    index: 0,
    account: '',
  })
  const accountTypeList = [1, 2];

  useEffect(() => {
    if (accountTypeList && accountTypeList.length > 0) {
      const _list = fmtList(accountTypeList);
      setState({
        accountTypeList: _list,
        accountType: _list[0].value,
        accountTypeName: _list[0].label,
        index: 0,
      })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(accountTypeList)])

  const handleSwitch = () => {
    const isFirst = state.index === 0;
    const _idx = isFirst ? 1 : 0;
    const _record = state.accountTypeList[_idx];
    setState({
      index: _idx,
      accountType: _record.value,
      accountTypeName: _record.label,
      account: '',
    })
  }

  const handleInput = e => {
    setState({ account: e })
  }

  return (
    <div className="z_switch_account">
      <div className="z_switch_head">
        <div>充值账号</div>
        {isQQ(state.accountType) && (
          <div className="z_qq_info">
            <img src={require('@/assets/logo.png')} alt="" />
            <span>xxxx</span>
          </div>
        )}
      </div>
      <div className="z_switch_account_input">
        <Input value={state.account} onChange={handleInput} />
        {state.accountTypeList.length === 2 && (
          <div className="z_switch" onClick={handleSwitch}>
            <img src={require('./switch.svg')} alt="" />
            <span>{state.accountTypeName}</span>
          </div>
        )}
      </div>
      {isQQ(state.accountType) && <div className="z_tip">为防止充值错误，已为您开启昵称校验</div>}
    </div>
  )
}