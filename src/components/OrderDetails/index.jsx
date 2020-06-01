import React,{useState}from 'react';
import dayjs from 'dayjs';
import router from 'umi/router'

import styles from './index.less'
import QRcode from '@/components/Home/Banner/QRcode';

 function formatMoney(value, isSymbol) {
  if (isSymbol) {
    return value ? `￥${value}` : '¥0'
  }
  return  value ? `${value} 元` : '0元'
}


export default ({ info = {}, productList = [] })=>{
  
  const [isShow, setShow] = useState(false);
  const [codeVisible, setCodeVisible] = useState(false);
  console.log(info.status)
  return(
    <div className={styles.orderdetail}>
      <div className={styles.orderdetail_title}>{productList[0] && productList[0]['productName']}{productList[1]&&`+${productList[1]['productName']}`}</div>
      <div  className={styles.orderdetail_container}>
        <div>
          <span>订单号</span>
          <span>{info.orderId}</span>
        </div>
       {info.rechargeAccount&& <div>
          <span>充值账号</span>
          <span>{productList[0] && productList[0]['rechargeAccount']}</span>
        </div>}
       {productList[0] &&productList[0]['productItemName']&& <div>
          <span>产品规格</span>
          <span>{productList[0] && productList[0]['productItemName']}</span>
        </div>}
        {((productList&&(productList[0] || {}).type===3||info.status===6||info.status==1||info.status==4||isShow)&&<>
          {info.productOriginalPrice&&<div>
          <span>原价</span>
          <span>{formatMoney(info.productOriginalPrice)}</span>
        </div>}

        {info.memberDiscAmt > 0  && info.memberDiscAmt > (info.eventDiscAmt || 0) && 
          <div>
          <span>会员价</span>
          <span>{ `-${formatMoney(info.memberDiscAmt)}`}</span>
        </div>
        }
         {info.eventDiscAmt > 0  && info.eventDiscAmt > (info.memberDiscAmt || 0) && 
          <div>
          <span>{info.type===1?'活动价':(info.type===2?'秒杀价':'')}</span>
          <span>{ `-${formatMoney(info.memberDiscAmt)}`}</span>
        </div>}
        {((info.buyMember)&&(info.memberPrice!==0))&&<div>
          <span>会员费</span>
          <span>{formatMoney(info.memberPrice)}</span>
        </div>}
      
        {info.buyMember&&(info.type===3||info.type===4)&&<div>
          <span>购买方式</span>
          <span>{info.type===3?"兑换码":info.type===4?'赠送':''}</span>
        </div>}
        {info.status===7&&(info.cancelTime)&&<div>
          <span>退款时间</span>
          <span>{dayjs(info.cancelTime).format('YYYY-MM-DD')}</span>
        </div>}

       { (productList[0].productId==19)&&(productList[1]) && (<><div>
          <span>换购商品</span>
          <span>{productList[1]['productName']}</span>
        </div>
        <div>
          <span>换购价格</span>
          <span>{formatMoney(productList[1]['amount'])}</span>
        </div></>)}

        <div>
          <span>实际支付</span>
          <span>{formatMoney(info.payAmount)}</span>
        </div>

        <div>
          <span>时间</span>
          <span>{dayjs(info.orderTime).format('YYYY-MM-DD')}</span>
        </div></>)}
        {info.buyMember&&info.memberExpiredTime&&<div>
          <span>过期时间</span>
          <span>{dayjs(info.memberExpiredTime).format('YYYY-MM-DD')}</span>
        </div>}
      </div>
    
      {[2,3,5,7,8,9,10,11].includes(info.status)&&<div className={styles.ShowMore}>
        <span onClick={()=>{setShow(!isShow)}}>{isShow?'收起详情':'显示详情'}
       { isShow&& <img src={require('./images/up.svg')} alt=""/> }
       { !isShow&& <img src={require('./images/down.svg')} alt=""/>}</span>
       <div onClick={()=>{router.push('./explore')}}>查看更多折扣商品</div>
      </div>}
      { (info.status===6 && info.rechargeAccount) && <div className={styles.concat}>
        <img src={require('./images/concat.svg')} alt=""/>
        <span onClick={()=>{ setCodeVisible(true)}}>联系客服</span>
        <QRcode visible={codeVisible} onClose={e=>{
        setCodeVisible(false)
      }}/>
      </div>}
    </div>

  )
}