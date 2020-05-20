import React from 'react';
import styles from './index.less'
import router from 'umi/router';
import Order from '@/components/OrderItem'
export default()=>{
  return(

    <div className={styles.myorder}>

    
      <Order onClick={() => router.push('/orderdetail')}/>
      <Order/>
      <Order/>
      <Order/>
      <Order/>
      <Order/>
      <Order/>
      <Order/>
      <Order/>

     
      

    </div>
  )
}