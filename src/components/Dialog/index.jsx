import React, {useState}from 'react';
import './index.less'
import Confirm from './confirm/index'
import {Modal,Input} from 'zarm';
export default ()=>{
  const [isShow, setShow ]= useState(true);
  return (

   isShow?(<Modal
      visible={isShow}
      maskClosable
      width='92%'
      onCancel={() => setShow(!isShow)}
      className="modal__1"
    >
      <img className="img1" src={require('./images/pen.png')} alt=""/>
      <div className='exchange_code'>
        兑换码
      </div>
      <div className='code_enter'>
        <Input className='code_enter_input'></Input>
      </div> 
      <div className="code_sub" onClick={()=>{setShow(!isShow)}}>
        <button > 提交</button>
      </div>
    </Modal>):(<Confirm onClick={()=>{setShow(!isShow)}}/>)
  )
}