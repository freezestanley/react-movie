import React  from 'react';
import CutDown from '../CutDown'
import './index.less'
function PayState(props){
  const{status,payAmount,deadline}=props.info
  return(
    <div className='pay_state'  >
      { status===1&&(<><div className='unpaid'>
        <div >  待支付</div>
        <div>
        <span>{payAmount}</span> 元 
        </div>
      </div>
      <div className='paytime'>
        <CutDown date={deadline+1000} onComplete={props.onComplete} />
        <div>等待付款，秒杀折扣将为您保留至倒计时结束</div>
      </div></>)}
      {status===2&&(<><div className='paid'>
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
      { (status===5)&&(<><div className='paid'>
        <div >  已完成</div>
        <div>
          <span>{payAmount}</span> 元 
        </div>
      </div></>)}
      { (status===6)&&(<><div className='failed'>
        <div >  充值失败</div>
        <div>
          <span>{payAmount}</span> 元 
        </div>
      </div></>)}
      { (status===7)&&(<><div className='invalid'>
        <div >  已退款</div>
        <div>
          <span>{payAmount}</span> 元 
        </div>
      </div></>)}
      { (status===8)&&(<><div className='invalid'>
        <div >  部分退款</div>
        <div>
          <span>{payAmount}</span> 元 
        </div>
      </div></>)}
      { (status===10)&&(<><div className='invalid'>
        <div >  退款中</div>
        <div>
          <span>{payAmount}</span> 元 
        </div>
      </div></>)}
      { (status===11)&&(<><div  className='upaid'>
        <div >  退款失败</div>
        <div>
          <span>{payAmount}</span> 元 
        </div>
      </div></>)}
    </div>
  )
}
export default PayState