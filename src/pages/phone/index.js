import React from 'react';
import { Input } from 'zarm';
import map from 'lodash/map';
import styles from './index.module.less';
import SpecItem from '@/components/SpecItem'

const phoneItemList = [
  { price: 20, payPrice: 10 },
  { price: 50, payPrice: 180 },
  { price: 198, payPrice: 365 }
]

export default function(props) {
  return (<div className={styles.phonePage}>
    <div className={styles.header}>
    </div>
    <div className={styles.group}>
      <h2>手机话费</h2>
      <Input placeholder="请输入手机号" className={styles.phoneInput} />
      <div className={styles.phoneItemList}>
        { map(phoneItemList, (item, idx) => <SpecItem key={idx} {...item} />) }
      </div>
    </div>
  </div>);
}