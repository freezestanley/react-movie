import React ,{useReducer}from 'react';
import  './index.less';
import {  Select, Toast } from 'zarm';

const SINGLE_DATA = [
  { value: '1', label: '选项一' },
  { value: '2', label: '选项二' },
];

export default () => {
  const [state, setState] = useReducer((o, n) => ({ ...o, ...n }), {
    visible: false,
    value: '',
    dataSource: SINGLE_DATA,
  })
  return (
    <div className='sel' onClick={()=>{setState({visible:true})} }>
      <div className='CardPackageMainSelect'>
        <span>请选择您想要的会员卡</span><br/>
      </div>
      <Select
        value={state.value}
        dataSource={state.dataSource}
        onOk={(selected) => {
          console.log('Picker onOk: ', selected);
          state.value = selected.map(item => item.value);
          setState({value:state.value})
         
        }}
        
      />
    </div>
  )
}