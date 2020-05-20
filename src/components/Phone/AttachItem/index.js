import React from 'react';
import styles from './index.module.less';
import cns from 'classnames';
import { fmtPrice } from '@/utils/tools';

export default function({ data }){
  return (<div className={cns(styles.attachItem, data.active ? styles.active : '')}>
    <div className={styles.priceBox}>
      <h2>+{data.payPrice}元</h2>
      <div className={styles.originPrice} dangerouslySetInnerHTML={{ __html: '原价' + fmtPrice(data.price, 'tag') }}></div>
    </div>
    <div className={styles.infoBox}>
      <h2>{data.productName}</h2>
      <div className={styles.productItemName}>{data.productItemName}</div>
    </div>
    { data.active && <img className={styles.checkIcon} src={require('@/assets/svg/check-ico.svg')} alt="" />}
  </div>);
}