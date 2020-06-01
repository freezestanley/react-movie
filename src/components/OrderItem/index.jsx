import React, { useCallback ,useState} from 'react';
import { connect } from 'dva';
import router from 'umi/router'

import { reLanchPay } from '@/utils/handlePay';
import dayjs from 'dayjs'
import  './index.less';
import QRcode from '@/components/Home/Banner/QRcode';
import GiftBag from './images/giftbag.png'

export default connect(state => state.user)(({info, dispatch})=>{
  const [codeVisible, setCodeVisible] = useState(false);
  let isShow
  let product1,product2
  if( info.productList.length === 2){
    product1=info.productList[0]
    product2=info.productList[1]
    isShow=true
  }else{
    product1=info.productList[0]
    isShow=false;
  }
  const relaunchPay = useCallback(() => {
    const formData = {
      orderId: info.orderId,
      payType: 1,
    };
    reLanchPay({ dispatch, type: 'order/relaunchPay',  formData });
  }, [dispatch, info.orderId]);

  return(
    <div className='order'  >
      <div className='order_up' onClick={() => router.push(`./orderdetail?id=${info.orderId}`)}>
        <div className='order_head'>
          <div className='headLeft'>
            <img  src={info.productList[0].image ||GiftBag}alt=''/>
            {(isShow&&!!(product2.image))&&(<img  src={info.productList[1].image} alt=''/>)}
            <span className='span_1'>{product1.productName}{isShow&&(`+${product2.productName}`)}</span>
          </div>
         <div className='pay'>
            {info.status===1&&(<span className='unpaid'>待支付 </span>)}
            {info.status===3&&(<span className='chagrefailed'>支付失败</span>)}
            {info.status===2&&(<span className='paid'>已支付</span>)}
            {info.status===4&&(<span className='outtime'>已失效</span> )}
            {info.status===5&&(<span className='paid'>已完成</span> )}
            {info.status===6&&(<span className='chagrefailed'>充值失败</span> )}
            {info.status===7&&(<span className='outtime'>已退款</span> )}
            {info.status===8&&(<span className='paid'>部分退款</span> )}
            {info.status===9&&(<span className='paid'>部分成功</span> )}
            {info.status===10&&(<span className='paid'>退款中</span> )}
            {info.status===11&&(<span className='chagrefailed'>退款失败</span> )}
         </div>
        </div>

        <div className='details'>
          <div className='detailsFirst'>
             <p className='details_p1'>订单 : {info.orderId}</p> <p className='up_p'>¥ {info.payAmount}</p>
          </div>
           <p className='details_p2'>时间 : {dayjs(info.orderTime).format('YYYY-MM-DD HH:mm:ss')}</p>
          {product1.productItemName&&<p className='details_p3'>规格 : {product1.productItemName} </p>}
        </div>
      </div>

      {(info.status!==4&&info.status!==2)&&(<div  className={`order_down  ${(info.status===5&&info.rechargeAccount)?'order_down_copy':''} `}>
        <div className='orderdownup'>
          {info.status===1&&( <span className='recharge' onClick={relaunchPay}>支付</span> )}
          {((info.status===3)||(info.status===6))&&(<span onClick={()=>{ setCodeVisible(true)}}  className='concat'>联系客服</span>)}
          {!info.rechargeAccount&&info.status===5&&(<span className='check' onClick={() => router.push(`./orderdetail?id=${info.orderId}`)}>查看卡密</span>)}
        </div>
        <QRcode visible={codeVisible} onClose={e=>{
        setCodeVisible(false)
        }}/>
      </div>)}
  </div>
  )
})