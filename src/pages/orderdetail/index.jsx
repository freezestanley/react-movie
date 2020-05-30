import React,{useEffect} from 'react';
import { connect } from 'dva';

import CardCharge from '@/components/CardCharge'
import OrderDetails from '@/components/OrderDetails';
import RecommendBuy from '@/components/RecommendBuy';
import PayState from './components/PayState'
import styles from './index.less'
import GiftCards from './components/GiftPacks'
import BuyFooter from '@/components/BuyFooter';

function OrderDetail(props){
  const {location: { query = {} } ,order:{orderDetails, productList },mainProduct:{info={}},dispatch}=props;
  const orderId = query.id;
  useEffect(() => {
      dispatch({ type: 'order/queryOrderDetials', payload: orderId  });
  }, [dispatch,orderId]);


  useEffect(() => {
    dispatch({ type: 'prePay/setState', payload: { main: orderDetails, type: 'order' } })
  }, [orderDetails, dispatch]);
  console.log(orderDetails)

  return(
    [<div className={styles.myorder} key="content">
      <PayState info={orderDetails} onComplete={()=>{ dispatch({ type: 'order/queryOrderDetials', payload: orderId  })}}/>
     { orderDetails.status===2&& productList&&productList[0].type===3&&<GiftCards />}
      { ((orderDetails.status===5)&&orderDetails.orderCardList)&&<CardCharge info={orderDetails}/>}
      <OrderDetails info={orderDetails} productList={productList}/>
      {/* { ((orderDetails.status===5)&&orderDetails.orderCardList)&&<div className={styles.node}><TopupNote info={orderDetails.productId} /></div>} */}
      <RecommendBuy/>
    </div>, orderDetails.status === 1 ? <BuyFooter isShowDetail={false} onValidate={() => true} /> : null ]
  )
}
export default connect(state=>state)(OrderDetail)