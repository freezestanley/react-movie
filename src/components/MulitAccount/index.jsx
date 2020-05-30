/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useReducer, useCallback } from 'react';
// import { Input } from 'zarm';
// import debounce from 'lodash/debounce';
import  { formatAccountStr, updateProductInfo } from '@/utils/ants';
import AccountItem from './AccountItem';

import './index.less';

export default function MulitAccount(props) {
  const accountList = formatAccountStr(props.accountType);
  const _val = props.defaultValue.account || [];
  const [state, setState] = useReducer((o, n) => ({ ...o, ...n }), {
    // [`account${index}`]: '',
    isFinished: false,
    accountType: props.accountType,
  })

  const handleChange = (data) => {
    updateProductInfo(props);
    let flag = false;
    if (data.value) {
      accountList.forEach((item, idx) => {
        if (data.index !== idx) {
          if (state[`account${idx}`]) {
            flag = true;
          }
          if (!item.required) {
            flag = true;
          }
        }
      })
    } else {
      flag = false;
    }
    const _data = { ...state, [`account${data.index}`]: data.value, isFinished: flag };
    setState(_data);
    props.onChange && props.onChange(_data);
  }

  // console.log('[31] index.jsx: ', state);

  return (
    <div className="z_mulit_account">
      {accountList.map((item, idx) => {
        return (
          <AccountItem
            key={idx}
            index={idx}
            title={item.title}
            placeholder={item.placeholder}
            required={item.required}
            onChange={handleChange}
            value={_val[idx]}
          />
        )
      })}
    </div>
  )
}