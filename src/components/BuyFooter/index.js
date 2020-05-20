import React, { useState } from 'react';
import withRouter from 'umi/withRouter';
import '@/assets/svgIcon/home.svg';
import { Popup } from 'zarm';
import { fmtPrice } from '@/utils/tools';
import styles from './index.module.less';
import zaLogo from './img/za-logo.png';
import { ReactComponent as HomeSvg } from './img/home.svg';
import { ReactComponent as CloseSvg } from './img/close.svg';
import { ReactComponent as PromptSvg } from './img/prompt.svg';
import { ReactComponent as SafeSvg } from './img/safe.svg';

export default withRouter(function(props) {
  const { history } = props;
  const [visible, setVisible]=useState(false);
  const toggleFn = (val) =>{
    setVisible(val);
  };
  const goToHome = () => {
    history.push('/');
  };
  return ([<div className={styles.buyFooter} key='footer'>
    <dl className={styles.home} onClick={goToHome}>
      <dt className={styles.homeIcon}>
        <HomeSvg />
      </dt>
      <dd>首页</dd>
    </dl>
    <div className={styles.content}>
      <div className={styles.total}>合计<i>¥</i><span>10</span></div>
      <div className={styles.saleDetail} onClick={toggleFn.bind(null, true)}>优惠明细<PromptSvg className={styles.questionIcon} /></div>
    </div>
    <div className={styles.btn}>立即支付</div>
  </div>, <Popup
    key='payInfo'
    direction="bottom"
    visible={visible}
    onMaskClick={toggleFn.bind(null, false)}
  >
    <div className={styles.payInfoBox}>
      <CloseSvg className={styles.closeIcon} onClick={toggleFn.bind(null, false)}/>
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
        <SafeSvg className={styles.small} />
        <span>蜜蜂充值平台商品真实有效性由</span>
        <img className={styles.logo} alt='' src={zaLogo} />
        <span>承保</span>
      </div>
    </div>
  </Popup>]);
})