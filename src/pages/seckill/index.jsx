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

  const detail = useMemo(() => info.detail, [info]);
  const mystock = useMemo(() => info.mystock, [info]);

  const fetchData = useCallback(() => {
    dispatch({ type: 'seckill/getSeckillDetail', payload: { id: query.id } });
  }, [dispatch, query.id]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    dispatch({ type: 'prePay/setState', payload: { main: detail || {}, type: 'seckill' } });
  }, [dispatch, detail]); // eslint-disable-line

  return (
    <div className={styles.seckillContainer}>
      {detail && (
        <ProductHead
          corner={detail.cornerMark}
          description={detail.productDescription}
          imgUrl={detail.productImage}
        />
      )}
      {detail && <SeckillActivityInfo info={detail} mystock={mystock} />}
      {detail && (
        <div className={styles.topupOther}>
          <TopupNote nodes={detail.productDetail || ''} />
        </div>
      )}
      <RecommendBuy />
      <BuyFooter onValidate={() => true} />
    </div>
  );
});
