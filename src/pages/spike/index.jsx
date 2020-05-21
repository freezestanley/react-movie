import React from 'react';
import styles from './index.less';
import  SpikeActivity from '@/components/SpikeActivity'

import Recom from '@/components/RecommendBuy/Recomend'
export default ()=>{
  return (
    <div className={styles.Spike}>

      <SpikeActivity></SpikeActivity>
     
      <Recom/>

    </div>
  )
}