import React from 'react';
import { Input } from 'zarm';
import map from 'lodash/map';
import styles from './index.module.less';
import SpecItem from '@/components/SpecItem'
import AttachItem from '@/components/Phone/AttachItem';

const phoneItemList = [
  { price: 20, payPrice: 10 },
  { price: 50, payPrice: 180 },
  { price: 198, payPrice: 365 }
]

const attachList = [
  { productName: '芒果TV视频会员', productItemName: '月卡', price: 20, payPrice: 13, active: true },
  { productName: '优酷视频会员', productItemName: '月卡', price: 20, payPrice: 15 },
  { productName: '拜博口腔十项检查卡', productItemName: '含数字全景片/牙周组织/智齿/龋齿/残根残冠/咬合关系检查', price: 300, payPrice: 5 },
]

export default function(props) {
  return (<div className={styles.phonePage}>
    <div className={styles.header}>
    </div>
    <div className={styles.group}>
      <h2>手机话费</h2>
      <Input placeholder="请输入手机号" className={styles.phoneInput} />
      <div className={styles.phoneItemList}>
        { map(phoneItemList, (item, idx) => <SpecItem active={ idx === 0 } key={idx} {...item} column={3} index={idx} />) }
      </div>
      <h2>超值换购<span>组合购买更优惠</span></h2>
      {map(attachList, (item, index) => <AttachItem key={index} data={item} />)}
    </div>
  </div>);
}