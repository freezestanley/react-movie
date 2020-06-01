/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useCallback } from 'react';
import withRouter from 'umi/withRouter';
import { connect } from 'dva';
import '@/assets/svgIcon/home.svg';
import { Popup } from 'zarm';
import { fmtPrice } from '@/utils/tools';
import cns from 'classnames';

import { vipDiscount } from '@/utils/ants';
import styles from './index.module.less';
import zaLogo from './img/za-logo.png';
import { ReactComponent as HomeSvg } from './img/home.svg';
import { ReactComponent as CloseSvg } from './img/close.svg';
import { ReactComponent as PromptSvg } from './img/prompt.svg';
import { ReactComponent as SafeSvg } from './img/safe.svg';
// import { ReactComponent as QuestionSvg } from './img/question.svg';
import { getTotalPrice, getDiscountInfo, createPhoneOrder, createProductOrder, createSeckillOrder, rePayOrder } from './util';


export default withRouter(connect(state => ({ ...state.prePay, user: state.user, vipTip: state.vipTip  }))(function(props) {
  const { history, main, attach, type, dispatch, onValidate, user, vipTip={}, isShowDetail=true, isResetForm = true, info } = props;
  const { isVIP, userId } = user;
  const [visible, setVisible]=useState(false);
  const totalPrice = getTotalPrice({ main, attach, type, isVIP });
  const discountInfo = getDiscountInfo({ main, attach, type, isVIP });
  const isVipTipVisible = type === 'product' && main.savePrice >0 && !isVIP && !main.isOpenVIP && vipTip.visible
  const btnInfo = info || { name: '立即购买', active: true };
  const toggleFn = (val) =>{
    setVisible(val);
  };
  const goToHome = () => {
    history.push('/');
  };
  const handlePay = (dispatch, data) => {
  }
  const goToDesPositon = () => {
    const scrollContainer = document.querySelector('.z_layout_cont');
    if (scrollContainer) {
      scrollContainer.scrollTop = vipTip.y - scrollContainer.clientWidth / 2 ;
      dispatch({ type: 'vipTip/setState', payload: { visible: false } })
    }
  };
  const startPayFn = useCallback(() => {
    console.log('------11111')
    if (!userId) {
      const sourcePage = window.encodeURIComponent(`${window.location.pathname}${window.location.search}`);
      history.push({ pathname: '/login', query: { sourcePage  } });
      return;
    }
    if (onValidate && onValidate())  {
      let data = {};
      switch(type) {
        case 'product':
          main.payPrice = totalPrice;
          data = main;
          createProductOrder({
            data,
            dispatch,
            // callback() {}
          });
          break;
        case 'vip':
          data = main;
          break;
        case 'seckill':
          data = main;
          createSeckillOrder({data, dispatch, callback(){}});
          break;
        case 'phone':
          data = { main, attach };
          createPhoneOrder({ data, dispatch})
          break;
        case 'order':
          data = main;
          console.log('----data', data);
          rePayOrder({ data, dispatch})
          break;
        default:
          data = main;
      }
      handlePay(dispatch, data);
    }

  }, [userId, type, main, attach]); // eslint-disable-line
  const {
    itemName, // 产品规格
    originPrice, // 原价
    discountLabel,
    discount, // 折扣
    discountAmount, // 折扣金额
    vipPrice, // VIP会员费
    attachProductName, // 换购商品名称
    attachPrice, // 换购商品价格
  } = discountInfo;
  useEffect(() => {
    dispatch({ type: 'global/setState', payload: { hasBuyFooter: true } });
    return () => {
      dispatch({ type: 'global/setState', payload: { hasBuyFooter: false } });
      isResetForm && dispatch({ type: 'prePay/resetState' });
      dispatch({ type: 'vipTip/setState', payload: { visible: true } })
    }
  }, []);
  useEffect(() => {
    if(main.isOpenVIP) {
      dispatch({ type: 'vipTip/setState', payload: { visible: false } })
    }
  }, [dispatch, main.isOpenVIP]);
  return [<div className={styles.buyFooter} key='footer' id="buy-footer-box">
    {isVipTipVisible && <div className={styles.vipTip} onClick={goToDesPositon}>开通会员 , 本单立省{main.savePrice}元</div>}
    <dl className={styles.home} onClick={goToHome}>
      <dt className={styles.homeIcon}>
        <HomeSvg />
      </dt>
      <dd>首页</dd>
    </dl>
    <div className={styles.content}>
      <div className={styles.total} dangerouslySetInnerHTML={{ __html: '合计'+fmtPrice(totalPrice, 'tag') }}></div>
      {isShowDetail && <div className={styles.saleDetail} onClick={toggleFn.bind(null, true)}>优惠明细<PromptSvg className={styles.questionIcon} /></div>}
    </div>
    <div className={cns(styles.btn, btnInfo.active ? styles.active : '')} onClick={btnInfo.active ? startPayFn : () => {}}>
      <span>{btnInfo.name}</span>
      {/* <QuestionSvg className={styles.question}/> */}
    </div>
  </div>, <Popup
    key='payInfo'
    direction="bottom"
    visible={visible}
    onMaskClick={toggleFn.bind(null, false)}
  >
    <div className={styles.payInfoBox}>
      <CloseSvg className={styles.closeIcon} onClick={toggleFn.bind(null, false)}/>
      <h2>优惠明细</h2>
      { itemName && <div className={styles.infoItem}>
          <div className={styles.label}>产品规格</div>
          <div className={styles.valueBox}>
          <div className={styles.value}>{itemName}</div>
          </div>
      </div> }
      {originPrice && <div className={styles.infoItem}>
        <div className={styles.label}>产品原价</div>
        <div className={styles.valueBox}>
          <div className={styles.value} dangerouslySetInnerHTML={{ __html: fmtPrice(originPrice, 'tag') }}></div>
        </div>
      </div>}
      {discountAmount < 0 && <div className={styles.infoItem}>
        <div className={styles.label}>{discountLabel}</div>
        <div className={styles.valueBox} >
          <span className={styles.prompt}>本单享{discount ? `${vipDiscount(discount)}折优惠` : '白金会员权益' }</span>
          <div className={styles.value} dangerouslySetInnerHTML={{ __html: fmtPrice(discountAmount, 'tag') }}></div>
        </div>
      </div>}
      { vipPrice && <div className={styles.infoItem}>
        <div className={styles.label}>VIP会员费用</div>
        <div className={styles.valueBox}>
        <div className={styles.value} dangerouslySetInnerHTML={{ __html: fmtPrice(vipPrice, 'tag') }}></div>
        </div>
      </div>}
      { attachProductName && <div className={styles.infoItem}>
        <div className={styles.label}>换购商品</div>
        <div className={styles.valueBox}>
        <div className={styles.value}>{attachProductName}</div>
        </div>
      </div>}
      { attachPrice && <div className={styles.infoItem}>
        <div className={styles.label}>换购价格</div>
        <div className={styles.valueBox}>
        <div className={styles.value}>{attachPrice}</div>
        </div>
      </div>}
      <div className={styles.reminderTip}>
        <SafeSvg className={styles.small} />
        <span>盎司充值平台商品真实有效性由</span>
        <img className={styles.logo} alt='' src={zaLogo} />
        <span>承保</span>
      </div>
    </div>
  </Popup>]
}))