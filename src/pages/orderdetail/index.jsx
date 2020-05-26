import React from 'react';
import styles from './index.less'
import CardCharge from '@/components/CardCharge'
import OrderDetails from '@/components/OrderDetails';
import RecommendBuy from '@/components/RecommendBuy'
import PayState from './components/PayState'

export default()=>{
  return(
    <div className={styles.myorder}>
      <PayState/>
      <OrderDetails/>
      <CardCharge/>
      <RecommendBuy/>
    </div>
  )
}