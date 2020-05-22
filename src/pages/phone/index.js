import React, { useEffect, useCallback } from 'react';
import { connect } from 'dva';
import { Input } from 'zarm';
import debounce from 'lodash/debounce';
import map from 'lodash/map';
import isEmpty from 'lodash/isEmpty';
import styles from './index.module.less';
import SpecItem from '@/components/Phone/FeeItem'
import AttachItem from '@/components/Phone/AttachItem';
import { ProductHead } from '@/components/Product';
import TopupNote from '@/components/Card/TopupNote';
import RecommendBuy from '@/components/RecommendBuy';

export default connect(state => ({
  phone: state.phone,
  phoneForm: state.phoneForm
}))(function(props) {
  const { phone: { product={}, productItems=[], attachList=[] }, phoneForm: { main, attach, rechargeAccount }, dispatch } =props;
  const mainLen = productItems.length;
  const attachLen = attachList.length;
  useEffect(() => {
    (async function() {
      await dispatch({ type: 'phone/getAttachList', payload: { productId: 19 } });
      await dispatch({ type: 'phone/getProductItems', payload: 19 });
      if (mainLen > 0) {
        dispatch({ type: 'phoneForm/setState', payload: { main: productItems[0] } });
      }
      if (attachLen > 0) {
        dispatch({ type: 'phoneForm/setState', payload: { attach: attachList[0] } });
      }
    })();
  }, [dispatch, mainLen, attachLen]); // eslint-disable-line
  const onSelectFn = (idx) => {
    dispatch({ type: 'phoneForm/setState', payload: { main: productItems[idx] } });
  };
  const onSelectAddtionFn = (idx) => {
    dispatch({ type: 'phoneForm/setState', payload: { attach: attachList[idx] } });
  };
  const onInputChange = (value) => {
    dispatch({ type: 'phoneForm/setState', payload: { rechargeAccount: value } });
  };
  return (<div className={styles.phonePage}>
    <ProductHead
      corner={product.topCornerMark}
      title={product.abbr}
      desc={product.name}
    />
    <div className={styles.group}>
      <h2>手机话费</h2>
      <Input placeholder="请输入手机号" className={styles.phoneInput} value={rechargeAccount} onChange={onInputChange} />
      <div className={styles.phoneItemList}>
        { map(productItems, (item, idx) => <SpecItem active={ main.id === item.id } key={idx} {...item} column={3} index={idx} onChange={onSelectFn} />) }
      </div>
      { !isEmpty(attachList) && <h2>超值换购<span>组合购买更优惠</span></h2> }
      {map(attachList, (item, index) => <AttachItem key={index} data={item} index={index} active={attach.id === item.id } onChange={onSelectAddtionFn} />)}
    </div>
    <div className={styles.detailBox}>
      <TopupNote nodes={product.detail || ''} />
    </div>
    <RecommendBuy />
  </div>);
})