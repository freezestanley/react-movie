import React, {useState}from 'react';
import './index.less'
import {Modal,Input,Toast} from 'zarm';
import cancel from './images/close.png'
import {AntiCheat} from '@/utils/handlePay';

export default (props)=>{
  const visible = props.visible;
  const [couponCardCode, setExchangeCardNo] = useState('')
  const [exchangeSuccess, setExchangeSuccess] = useState(false);
  const onSubmit = () => {
    AntiCheat({
      dispatch: props.dispatch,
      formData:{
        couponCardCode
      },
      type:'coupon/exchangeMember',
      callback: (res) => {
        console.log('res',res);
        if(res.code !== '0000'){
          Toast.show(res.msg)
        }else{
          setExchangeSuccess(true);
          props.onSuccess && props.onSuccess()
        } 
      }
    })
   
  }
  const inputonChange = value => {
    setExchangeCardNo(value)
  }
  return (
    visible?<Modal
      visible={true}
      maskClosable
      width='92%'
      onCancel={() => props.onCancel}
      className="modal__1"
    >
      <img className="img1" src={require('./images/pen.png')} alt=""/>
      {
        exchangeSuccess ? 
        (
          <div>
            <div className='exchange_code'>
              恭喜你，兑换白金会员成功
            </div>
            <div className='exchange_code1'>
              您的会员有效期已更新
            </div>
            <div className='exchange_code1'>
              请至会员页面查看
            </div>
             
          </div>
      
        ):
        <div>
          <div className='exchange_code'>
                {exchangeSuccess ? '恭喜你，兑换白金会员成功' : '兑换码'}
              </div>
              <div className='code_enter'>
                <Input className='code_enter_input' placeholder='请输入兑换码' onChange={inputonChange}></Input>
              </div> 
              <div className="code_sub" onClick={onSubmit}>
                <div>提交</div>
              </div>
        </div>
      }
   
      <img src={cancel} className='cancel-img' alt='' onClick={props.onCancel} />
    </Modal>:""
  )
}