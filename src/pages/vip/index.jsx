import React, { useEffect } from 'react';
import { connect } from 'dva';
import HotRecommend from '@/components/HotRecommend';
import TimeLimitSlider from '@/components/VipTimeLimitSlider';
import isEmpty from 'lodash/isEmpty';
import filter from 'lodash/filter';
import includes from 'lodash/includes';
import Baseinfo from './Baseinfo';
import Section from './Section';
import ZeroBuy from './ZeroBuy';
import Discount from './Discount';
import Rights from './Rights';
import styles from './index.module.less';


export default connect(state => ({banner: state.banner, productDetail: state.productDetail, products: state.products.list}))((props) => {
  const { dispatch, productDetail, products } = props;
  const vipSeckillList = filter(productDetail.eventList, item => item.onlyForVip === 'Y');
  const hotRecommendList = filter(props.banner.list, item => item.bannerType === 5);
  const saleList = filter(products, item => includes([12,16,56,18,17,4,54,25], item.id));
  useEffect(() => {
    dispatch({ type: 'productDetail/getEventList', payload: {} });
    dispatch({ type: 'products/getProducts', payload: { status: 2 } });
  }, [dispatch]);

  return (
    <div className={styles['page']}>
      <div className={styles['baseinfo']}><Baseinfo /></div>
      <Section title="健康权益0元购" className={styles['zerobuy']}>
        <ZeroBuy />
      </Section>
      <Section title="会员专享折扣" className={styles['discount']}>
        <Discount list={saleList} />
      </Section>
      <Section title="会员专享秒杀" className={styles['seckill']}>
      { !isEmpty(vipSeckillList) && <TimeLimitSlider data={vipSeckillList} dispatch={dispatch} />}
      </Section>
      <Section title="更多特权正在上线中" className={styles['rights']}>
        <Rights />
      </Section>
      <Section title="热门推荐" className={styles['recommend']}>
      { !isEmpty(hotRecommendList) && <HotRecommend bannerList={hotRecommendList} />}
      </Section>
    </div>
  );
});
