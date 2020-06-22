import React, { useState } from 'react';
import { Input } from 'zarm';

export default function AccountItem(props) {
  const [account, setAccount] = useState(props.value || '');
  const handleInput = e => {
    setAccount(e);
    props.onChange && props.onChange({
      value: e,
      index: props.index,
      isNotEmpty: e ? true : false,
      required: props.required,
    })
  };

  return (
    <div className="z_mulit_item">
      <div className="z_mulit_head">
        <div>{props.title}</div>
      </div>
      <div className='z_mulit_item_input'>
        <Input
          placeholder={props.placeholder}
          value={account}
          onChange={handleInput}
        />
      </div>
    </div>
  )
}