/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useReducer, useCallback } from 'react';
import { Input } from 'zarm';
import debounce from 'lodash/debounce';
import  { formatAccountStr, isQQ } from '@/utils/ants';
import { getQQInfo } from '@/services/user';

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
    QQInfo: {},
    onInput: true,
  })
  const accountTypeList = props.accountTypeList;

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

  useEffect(() => {
    props.onChange && props.onChange({
      account: state.account,
      accountType: state.accountType
    });
  }, [state.account, state.accountType])

  const handleSwitch = () => {
    const isFirst = state.index === 0;
    const _idx = isFirst ? 1 : 0;
    const _record = state.accountTypeList[_idx];
    setState({
      index: _idx,
      accountType: _record.value,
      accountTypeName: _record.label,
      account: '',
      QQInfo: {},
    })
  }

  const handleInput = e => {
    // console.log(e)
    setState({ account: e })
    handleQQInfo(e, state);
  }

  const handleQQInfo = useCallback(debounce((val, state) => {
    if (!isQQ(state.accountType) || !val) {
      setState({ QQInfo: {} });
      return;
    }

    getQQInfo(val)
      .then(res => {
        if (res.code === '0000') {
          setState({ QQInfo: res.data })
        } else {
          setState({ QQInfo: {} });
        }
      })
  }, 500, { leading: false, trailing: true }), [])

  const len = state.accountTypeList.length;

  return (
    <div className="z_switch_account">
      <div className="z_switch_head">
        <div>充值账号</div>
        {isQQ(state.accountType) && (
          <div className="z_qq_info">
            <img src={state.QQInfo.avatar} alt="" />
            <span>{state.QQInfo.nickname}</span>
          </div>
        )}
      </div>
      <div className={`z_switch_account_input ${len === 1 ? 'w100' : ''}`}>
        <Input
          placeholder={`请输入${state.accountTypeName}`}
          value={state.account}
          onChange={handleInput}
          // onFocus={() => setState({ onInput: true })}
          // onBlur={() => setState({ onInput: false })}
        />
        {len === 2 && (
          <div className="z_switch" onClick={handleSwitch}>
            <img src={require('./switch.svg')} alt="" />
            <span>{state.accountTypeName}</span>
          </div>
        )}
      </div>
      {isQQ(state.accountType) && state.onInput && <div className="z_tip">为防止充值错误，已为您开启昵称校验</div>}
    </div>
  )
}