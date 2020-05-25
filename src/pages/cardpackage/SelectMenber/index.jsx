import React ,{useReducer}from 'react';
import style from './index.less';
import { Cell, Button, Picker, Toast } from 'zarm';
const SINGLE_DATA = [
  { value: '1', label: '选项一' },
  { value: '2', label: '选项二' },
];
export default ()=>{
  const [state, setState] = useReducer((o, n) => ({ ...o, ...n }), {
    visible: false,
    value: '',
    dataSource: SINGLE_DATA,
    
  })
  return(
    <div className={style.sel}>
       <div className={style.CardPackageMainSelect}>
        <span>请选择您想要的会员卡</span><br/>
        <input type="text" placeholder= '请选择' />
        <span onClick={()=>{setState({visible:true})} }> > </span>
      </div>
       <Picker
          visible={state.visible}
          value={state.value}
          dataSource={state.dataSource}
          onOk={(selected) => {
            console.log('Picker onOk: ', selected);
            state.value = selected.map(item => item.value);
            setState({visible:false})
            Toast.show(JSON.stringify(selected));
          }}
          onClick={()=> setState({visible:true}) }
        />
        </div>
   
  )
}