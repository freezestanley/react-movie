import React  from 'react';
import CutDown from '../CutDown'
import './index.less'
function PayState(props){
  
  const{status,payAmount,deadline}=props.info
  console.log(status,payAmount)
  var time =1000
  return(
    <div className='pay_state'  >
      { status===1&&(<><div className='unpaid'>
        <div >  待支付</div>
        <div>
        <span>{payAmount}</span> 元 
        </div>
      </div>
      <div className='paytime'>
        <CutDown date={deadline}/>
        <div>等待付款，秒杀折扣将为您保留至倒计时结束</div>
      </div></>)}
      {status==2&&(<><div className='paid'>
        <div >  已支付</div>
        <div>
          <span>{payAmount}</span> 元 
        </div>
      </div></>)}
      { ((status===3)||(status===4))&&(<><div className='invalid'>
        <div >  已失效</div>
        <div>
          <span>{payAmount}</span> 元 
        </div>
      </div></>)}
    </div>
  )
}
export default PayState