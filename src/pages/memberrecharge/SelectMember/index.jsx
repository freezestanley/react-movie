import React ,{useReducer}from 'react';
import  './index.less';
import {  Select, Toast } from 'zarm';

export default (props) => {
  const [state, setState] = useReducer((o, n) => ({ ...o, ...n }), {
    value: '',
    dataSource: (props.data||[]).map(item=>({value:item.productItemId,label:item.productName +' - '+ item.productItemName})),
  })
  return (
    <div className='sel'  >
      <div className='CardPackageMainSelect'>
        <span>请选择您想要的会员卡</span><br/>
      </div>
      <Select
        // value={state.value}
        dataSource={state.dataSource}
        onOk={(selected) => {
          console.log(selected,'ds')
          const {value,label} = selected[0];
          const {rechargeAccountType} = (props.data||[]).find(item=>item.productItemId==value)||{}
          props.onChange&&props.onChange({productItemId:value,rechargeAccountType,title:label})
        }}
      />
    </div>
  )
}