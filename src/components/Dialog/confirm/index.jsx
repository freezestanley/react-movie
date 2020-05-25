import React, {useState}from 'react';
import './index.less'
import {Modal,Input} from 'zarm';
export default ({onClick})=>{
  const [isShow, setShow ]= useState(true);
  const handleClick = () => {
    onClick && onClick();
  }
  const handleInput = e => {
    console.log(e)
    
  }
  return (
    <Modal
      visible={isShow}
      maskClosable
      width='92%'
      onCancel={() => setShow(!isShow)}
      className="modal__2"
    >
      <img className="img2" src={require('../images/pen.png')} alt=""/>
      <div className='exchange_confirm'>
        <div> 确认领取<span>腾讯视频VIP会员月卡</span>?</div>
          充值账号
      </div>
      <div className='code_enter'>
        <Input className='code_enter_input'  onChange={handleInput} />
      </div> 
      <div className="code_sub" onClick={()=>{console.log(1)}}>
      <button className='btn_cancle'onClick={handleClick} > 取消</button> <button className='btn_ensure'  > 提交</button>
      </div>
    </Modal>
    


  )
}