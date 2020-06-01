import React, { useEffect, useCallback } from 'react';
import { connect } from 'dva';
import { Input, Toast } from 'zarm';
import debounce from 'lodash/debounce';
import map from 'lodash/map';
import findIndex from 'lodash/findIndex';
import isEmpty from 'lodash/isEmpty';
import styles from './index.module.less';
import SpecItem from '@/components/Phone/FeeItem'
import AttachItem from '@/components/Phone/AttachItem';
import { ProductHead } from '@/components/Product';
import TopupNote from '@/components/Card/TopupNote';
import RecommendBuy from '@/components/RecommendBuy';
import BuyFooter from '@/components/BuyFooter';

export default connect(state => ({
  phone: state.phone,
  phoneForm: state.phoneForm
}))(function(props) {
const { phone: { product={}, productItems=[], attachList=[] }, phoneForm: { main, attach={}, rechargeAccount }, dispatch } =props;
  useEffect(() => {
    (async function() {
      await dispatch({ type: 'phone/getAttachList', payload: { productId: 19 } });
      await dispatch({ type: 'phone/getProductItems', payload: 19 });
    })();
  }, [dispatch]); // eslint-disable-line
  const onSelectFn = (idx) => {
    dispatch({ type: 'phoneForm/setState', payload: { main: productItems[idx] } });
  };
  const onSelectAddtionFn = (idx) => {
    if(isEmpty(attach)) {
      dispatch({ type: 'phoneForm/setState', payload: { attach: attachList[idx] } });
    } else {
      const originIdx = findIndex(attachList, item => item.id === attach.id);
      if (originIdx === idx){
        dispatch({ type: 'phoneForm/setState', payload: { attach: {} } });
      } else {
        dispatch({ type: 'phoneForm/setState', payload: { attach: attachList[idx] } });
      }
    }
  }; // eslint-disable-line
  const onInputChange = (value) => {
    dispatch({ type: 'phoneForm/setState', payload: { rechargeAccount: value } });
  };
  const debouncedFn = useCallback(debounce((mainData, attachData, rechargeAccount) => {
    dispatch({ type: 'prePay/setState', payload: { type: 'phone', main: { ...mainData, rechargeAccount }, attach: attachData } });
  }, 200, { leading: false, trailing: true }), []);
  const validate = useCallback(() => {
    if (!/^1\d{10}$/.test(rechargeAccount)) {
      Toast.show('手机号码格式错误！');
      return false;
    }
    if (isEmpty(main)) {
      Toast.show('请选择话费规格！');
      return false;
    }
    return true
  }, [rechargeAccount, main]);
  useEffect(()=> {
    debouncedFn(main, attach, rechargeAccount);
  }, [debouncedFn, main, attach, rechargeAccount]);
  return (<div className={styles.phonePage}>
    <ProductHead
      imgUrl={product.image}
      corner={product.topCornerMark}
      description={product.description}
    />
    <div className={styles.group}>
      <h2>手机话费</h2>
      <Input placeholder="请输入手机号" className={styles.phoneInput} value={rechargeAccount} onChange={onInputChange} />
      <div className={styles.phoneItemList}>
        { map(productItems, (item, idx) => (
          <SpecItem
            active={ main.id === item.id }
            key={idx}
            {...item}
            column={3}
            index={idx}
            onChange={onSelectFn}
          />
        )) }
      </div>
      { !isEmpty(attachList) && <h2>超值换购<span>组合购买更优惠</span></h2> }
      {map(attachList, (item, index) => <AttachItem key={index} data={item} index={index} active={attach.id === item.id } onChange={onSelectAddtionFn} />)}
    </div>
    <div className={styles.detailBox}>
      <TopupNote nodes={product.detail || ''} />
    </div>
    <RecommendBuy />
    <BuyFooter onValidate={validate} isShowDetail={!isEmpty(main) || !isEmpty(attach)} />
  </div>);
})