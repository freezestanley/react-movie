import React,{useEffect} from 'react';
import CardCharge from '@/components/CardCharge'
import OrderDetails from '@/components/OrderDetails';
import RecommendBuy from '@/components/RecommendBuy';
import PayState from './components/PayState'
import styles from './index.less'
import { connect } from 'dva';

function OrderDetail(props){
  const {location: { query = {} } ,order:{orderDetails, productList },dispatch}=props;
  const orderId = query.id;
  useEffect(() => {
    dispatch({ type: 'order/queryOrderDetials', payload: orderId  });
  }, [dispatch,orderId]);
  return(
    <div className={styles.myorder}>
      <PayState info={orderDetails}/>
      <OrderDetails info={orderDetails} productList={productList}/>
      <RecommendBuy/>
    </div>
  )
}
export default connect(state=>state)(OrderDetail)