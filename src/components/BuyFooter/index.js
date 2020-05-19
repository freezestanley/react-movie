import React from 'react';
import '@/assets/svgIcon/home.svg';
import styles from './index.module.less';

export default function() {
  return (<div className={styles.buyFooter}>
    <dl className={styles.home}>
      <dt className={styles.homeIcon}>
      </dt>
      <dd>首页</dd>
    </dl>
    <div className={styles.content}>
      <div className={styles.total}>合计<i>¥</i><span>10</span></div>
      <div className={styles.saleDetail}>优惠明细<i className={styles.questionIcon}></i></div>
    </div>
    <div className={styles.btn}>立即支付</div>
  </div>);
}