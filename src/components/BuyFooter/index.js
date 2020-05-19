import React, { useState } from 'react';
import '@/assets/svgIcon/home.svg';
import { Popup } from 'zarm';
import { fmtPrice } from '@/utils/tools';
import styles from './index.module.less';
import zaLogo from './img/za-logo.png';

export default function() {
  const [visible, setVisible]=useState(false);
  const toggleFn = (val) =>{
    setVisible(val);
  };
  return ([<div className={styles.buyFooter} key='footer'>
    <dl className={styles.home}>
      <dt className={styles.homeIcon}>
      </dt>
      <dd>首页</dd>
    </dl>
    <div className={styles.content}>
      <div className={styles.total}>合计<i>¥</i><span>10</span></div>
      <div className={styles.saleDetail} onClick={toggleFn.bind(null, true)}>优惠明细<i className={styles.questionIcon}></i></div>
    </div>
    <div className={styles.btn}>立即支付</div>
  </div>, <Popup
    key='payInfo'
    direction="bottom"
    visible={visible}
    onMaskClick={toggleFn.bind(null, false)}
  >
    <div className={styles.payInfoBox}>
      <h2>优惠明细</h2>
      <div className={styles.infoItem}>
        <div className={styles.label}>产品规格</div>
        <div className={styles.valueBox}>
          <div className={styles.value}>10Q币</div>
        </div>
      </div>
      <div className={styles.infoItem}>
        <div className={styles.label}>产品原价</div>
        <div className={styles.valueBox}>
          <div className={styles.value} dangerouslySetInnerHTML={{ __html: fmtPrice(10, 'tag') }}></div>
        </div>
      </div>
      <div className={styles.infoItem}>
        <div className={styles.label}>VIP会员价</div>
        <div className={styles.valueBox} >
          <span className={styles.prompt}>本单享9折优惠</span>
          <div className={styles.value} dangerouslySetInnerHTML={{ __html: fmtPrice(-2, 'tag') }}></div>
        </div>
      </div>
      <div className={styles.infoItem}>
        <div className={styles.label}>VIP会员费用</div>
        <div className={styles.valueBox}>
        <div className={styles.value} dangerouslySetInnerHTML={{ __html: fmtPrice(9.9, 'tag') }}></div>
        </div>
      </div>
      <div className={styles.reminderTip}>
        <img className={styles.small} alt='' src="#" />
        <span>蜜蜂充值平台商品真实有效性由</span>
        <img className={styles.logo} alt='' src={zaLogo} />
        <span>承保</span>
      </div>
    </div>
  </Popup>]);
}