import React,{useState}from 'react';
import dayjs from 'dayjs';

import styles from './index.less'

export default ({ info = {}, productList = [] })=>{
  const [isShow, setShow] = useState(false);
  console.log(productList)
  console.log(info)
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
        <div>
          <span>产品规格</span>
          <span>{productList[0] && productList[0]['productItemName']}</span>
        </div>
        {isShow&&<>
        <div>
          <span>原价</span>
          <span>{info.productOriginalPrice}</span>
        </div>
        {info.buyMember&&<div>
          <span>会员价</span>
          <span>{info.memberAmount}</span>
        </div>}
        {info.buyMember&&<div>
          <span>会员费</span>
          <span>{info.memberPrice}</span>
        </div>}
        {info.buyMember&&<div>
          <span>购买方式</span>
          <span>{info.type===3?"兑换码":info.type===4?'赠送':'兑换码'}</span>
        </div>}

       { (productList[1])&& (<><div>
          <span>加购商品</span>
          <span>{productList[1]['productName']}</span>
        </div>
        <div>
          <span>商品价格</span>
          <span>{productList[1]['amount']}</span>
        </div></>)}
        <div>
          <span>实际支付</span>
          <span>{info.totalAmount||''}</span>
        </div>
        <div>
          <span>时间</span>
          <span>{dayjs(info.orderTime).format('YYYY-MM-DD')}</span>
        </div></>}
      </div>
      {info.status!==6&&<div className={styles.ShowMore}>
        <span onClick={()=>{setShow(!isShow)}}>{isShow?'收起详情':'显示详情'}
       {isShow&& <img src={require('./images/up.svg')} alt=""/> }
       {!isShow&& <img src={require('./images/down.svg')} alt=""/>}</span>
       
       <div>查看更多折扣商品</div>
      </div>}
     
      {(info.status===6&&info.rechargeAccount&&info.orderCardLis===null)&&<div className={styles.concat}>
        <img src={require('./images/concat.svg')} alt=""/>
        <span>联系客服</span>
      </div>}
    </div>

  )
}