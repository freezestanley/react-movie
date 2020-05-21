import React from 'react';
import styles from './index.less'
import router from 'umi/router';
import Order from '@/components/OrderItem'
import Activity from '@/components/SpikeActivity'

import { Pull, Cell, Message, Icon, Button } from 'zarm';
const REFRESH_STATE = {
  normal: 0,  // 普通
  pull: 1,    // 下拉刷新（未满足刷新条件）
  drop: 2,    // 释放立即刷新（满足刷新条件）
  loading: 3, // 加载中
  success: 4, // 加载成功
  failure: 5, // 加载失败
};

const LOAD_STATE = {
  normal: 0,   // 普通
  abort: 1,    // 中止
  loading: 2,  // 加载中
  success: 3,  // 加载成功
  failure: 4,  // 加载失败
  complete: 5, // 加载完成（无新数据）
};
const getRandomNum = (min, max) => {
  const Range = max - min;
  const Rand = Math.random();
  return (min + Math.round(Rand * Range));
}


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