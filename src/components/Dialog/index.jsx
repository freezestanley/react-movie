import React, {useState}from 'react';
import './index.less'
import Confirm from './confirm/index'
import {Modal,Input} from 'zarm';
import cancel from './images/close.png'
export default (props)=>{
  const {visible,onExchangeCard,code,step=1,title} = props
  console.log(step === 1)
  return (
    visible?( step === 1 ? <Modal
      visible={true}
      // maskClosable
      width='92%'
      onCancel={() => props.onCancel}
      className="modal__1"
    >
      <img className="img1" src={require('./images/pen.png')} alt=""/>
      <div className='exchange_code'>
        兑换码
      </div>
      <div className='code_enter'>
        <Input className='code_enter_input' value={code} disabled placeholder='请输入兑换码'></Input>
      </div> 
      <div className="code_sub" onClick={onExchangeCard}>
        <div>提交</div>
      </div>
      <img src={cancel} className='cancel-img' alt='' onClick={props.onCancel} />
    </Modal> : <Confirm onCancel={props.onCancel} title={title} value={code} onClick={onExchangeCard}/>) : ""
  )
}