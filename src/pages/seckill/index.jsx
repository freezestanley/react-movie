import React, { useEffect, useCallback } from 'react';
import { connect } from 'dva';
import styles from './index.module.less';
import { ProductHead } from '@/components/Product';
import TopupNote from '@/components/Card/TopupNote';
import RecommendBuy from '@/components/RecommendBuy';
import SeckillActivityInfo from './SeckillActivityInfo';
import BuyFooter from '@/components/BuyFooter';

export default connect(state => ({seckill: state.seckill}))((props) => {
  const { dispatch, location: { query }, seckill: { info: detail } } = props;

  const fetchData = useCallback(() => {
    dispatch({ type: 'seckill/getSeckillDetail', payload: { id: query.id  } })
  }, [dispatch, query.id]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  useEffect(() => {
    dispatch({});
  }, [detail.id]); // eslint-disable-line

  return (
    <div className={styles.seckillContainer}>
      <ProductHead
        corner={detail.cornerMark}
        title={detail.productName}
        desc={detail.eventName}
        imgUrl={'#'}
      />
      {detail && <SeckillActivityInfo info={detail} />}
      { detail && <div className={styles.topupOther}>
          <TopupNote nodes={detail.productDesc || ''} />
    </div> }
      <RecommendBuy />
      <BuyFooter/>
    </div>
  );
});
