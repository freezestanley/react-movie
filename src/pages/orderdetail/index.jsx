import React,{useEffect,useCallback} from 'react';
import CardCharge from '@/components/CardCharge'
import OrderDetails from '@/components/OrderDetails';
import RecommendBuy from '@/components/RecommendBuy';
import PayState from './components/PayState'
import styles from './index.less'
import { connect } from 'dva';

function OrderDetail(props){
  const {location: { query = {} } ,order:{orderDetails, productList },dispatch}=props;
  const orderId = query.id;
  var isupdate=false
  useEffect(() => {
    dispatch({ type: 'order/queryOrderDetials', payload: orderId  });
  }, [dispatch,orderId,isupdate]);
  return(
    <div className={styles.myorder}>
      <PayState info={orderDetails} onComplete={()=>{ dispatch({ type: 'order/queryOrderDetials', payload: orderId  })}}/>
      <OrderDetails info={orderDetails} productList={productList}/>
      <RecommendBuy/>
    </div>
  )
}
export default connect(state=>state)(OrderDetail)