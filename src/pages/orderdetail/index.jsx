import React,{useEffect} from 'react';
import { connect } from 'dva';
import filter from 'lodash/filter';

import CardCharge from '@/components/CardCharge'
import OrderDetails from '@/components/OrderDetails';
import RecommendBuy from '@/components/RecommendBuy';
import PayState from './components/PayState'
import styles from './index.less'
import GiftCards from './components/GiftPacks'
import BuyFooter from '@/components/BuyFooter';
import HotRecommend from '@/components/HotRecommend';

function OrderDetail(props){
  const {location: { query = {} } ,order:{orderDetails, productList },dispatch}=props;
  const orderId = query.id;
  useEffect(() => {
      dispatch({ type: 'order/queryOrderDetials', payload: orderId  });
  }, [dispatch,orderId]);


  useEffect(() => {
    dispatch({ type: 'prePay/setState', payload: { main: orderDetails, type: 'order' } })
  }, [orderDetails, dispatch]);
  const hotRecommendList = filter(props.banner.list, item => item.bannerType === 5);
  useEffect(() => {
    props.dispatch({type:'order/queryMyOrders',payload:{
      pageNo:1,
      pageSize:10,
      status:1
    }})
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return(
    [<div className={styles.myorder} key="content">
      <PayState info={orderDetails} onComplete={()=>{ dispatch({ type: 'order/queryOrderDetials', payload: orderId  })}}/>
     { orderDetails.status===2&& productList&&productList[0].type===3&&<GiftCards />}
      { ((orderDetails.status===5)&&orderDetails.orderCardList)&&<CardCharge info={orderDetails}/>}
      <OrderDetails info={orderDetails} productList={productList}/>
      {/* { ((orderDetails.status===5)&&orderDetails.orderCardList)&&<div className={styles.node}><TopupNote info={orderDetails.productId} /></div>} */}
      {orderDetails.status!==1&&<RecommendBuy/>}
      {[2,4,6].includes(orderDetails.status)&&<div className={styles.hot}>
        <HotRecommend bannerList={hotRecommendList} />
      </div>}
    </div>, orderDetails.status === 1 ? <BuyFooter  key ='buy' info={{ name: '立即支付', active: true }} isShowDetail={false} onValidate={() => true} /> : null ]
  )
}
export default connect(state=>state)(OrderDetail)