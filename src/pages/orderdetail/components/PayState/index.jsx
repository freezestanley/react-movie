import React  from 'react';
import CutDown from '../CutDown'
import './index.less'
function PayState(props){
  const mock={
    ispay:'3',//1待支付 1已支付 3支付失败
  }
  var time =1000
  return(
    <div className='pay_state'  >
      { mock.ispay==='1'&&(<><div className='unpaid'>
        <div >  待支付</div>
        <div>
          <span>1000</span> 元 
        </div>
      </div>
      <div className='paytime'>
        <CutDown date={time}/>
        <div>等待付款，秒杀折扣将为您保留至倒计时结束</div>
      </div></>)}
      {mock.ispay==2&&(<><div className='paid'>
        <div >  已支付</div>
        <div>
          <span>1000</span> 元 
        </div>
      </div></>)}
      { mock.ispay==='3'&&(<><div className='invalid'>
        <div >  已失效</div>
        <div>
          <span>1000</span> 元 
        </div>
      </div></>)}
    </div>
  )
}
export default PayState