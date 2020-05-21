import React from 'react';
import styles from './index.less';
import  SpikeActivity from '@/components/SpikeActivity'

import Recommend from '@/components/RecommendBuy'
export default ()=>{
  return (
    <div className={styles.Spike}>

      <SpikeActivity></SpikeActivity>
      <div className={styles.SpikeR}>
          <div className={styles.SpikeRItem}>
            <div>
              <span>蜜蜂会员都在买</span><span>更多 ></span>
            </div>
            <div >
              <div>  <Recommend title='Q币限时优惠' detail='捂着限时秒杀，限时专享' price='274'/></div>
              <div>  <Recommend title='Q币限时优惠' detail='捂着限时秒杀，限时专享' price='274'/></div> 
              <div>  <Recommend title='Q币限时优惠' detail='捂着限时秒杀，限时专享' price='274'/></div> 
              <div>  <Recommend title='Q币限时优惠' detail='捂着限时秒杀，限时专享' price='274'/></div>
            </div>

          
          </div>
         
        
      </div>

    </div>
  )
}