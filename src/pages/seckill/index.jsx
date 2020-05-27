import React, { useEffect, useCallback, useMemo } from 'react';
import { connect } from 'dva';
import styles from './index.module.less';
import { ProductHead } from '@/components/Product';
import TopupNote from '@/components/Card/TopupNote';
import RecommendBuy from '@/components/RecommendBuy';
import SeckillActivityInfo from './SeckillActivityInfo';
import BuyFooter from '@/components/BuyFooter';

export default connect(state => ({ seckill: state.seckill }))(props => {
  const {
    dispatch,
    location: { query },
    seckill: { info },
  } = props;
  console.log('info:', info);

  const detail = useMemo(() => {
    return info.detail || {};
  }, [info]);

  const mystock = useMemo(() => {
    return info.mystock || 0;
  }, [info]);

  const fetchData = useCallback(() => {
    dispatch({ type: 'seckill/getSeckillDetail', payload: { id: query.id } });
  }, [dispatch, query.id]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    dispatch({ type: 'prePay/setState', payload: { main: detail, type: 'seckill' } });
  }, [detail]); // eslint-disable-line

  return (
    <div className={styles.seckillContainer}>
      <ProductHead
        corner={detail.cornerMark}
        title={detail.productName}
        desc={detail.eventName}
        imgUrl={'#'}
      />
      {detail && <SeckillActivityInfo info={detail} mystock={mystock} />}
      {detail && (
        <div className={styles.topupOther}>
          <TopupNote nodes={detail.productDesc || ''} />
        </div>
      )}
      <RecommendBuy />
      <BuyFooter onValidate={() => true} />
    </div>
  );
});
