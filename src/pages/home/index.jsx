import React, { useEffect } from 'react';
import { connect } from 'dva';
import HotRecommend from '@/components/HotRecommend'
import Banner from '@/components/Home/Banner';
import ShortCut from '@/components/Home/ShortCut';
import Belt from '@/components/Home/Belt';
import filter from 'lodash/filter';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from './style/index.less';
import TimeLimitSlider from '@/components/TimeLimitSlider';


function Home ({ dispatch,bannerList, ...rest }) {
  const topBanners = filter(bannerList, item => item.bannerType === 1);
  const middleBanners = filter(bannerList, item => item.bannerType === 3);
  useEffect(() => {
    dispatch({ type: 'banner/getBanner', payload: {
      bannerType:[1,2,3,5]
    } });
    dispatch({ type: 'productDetail/getEventList', payload: {} });
  }, [dispatch]);
  console.log('rest',rest,bannerList);
  
  return (
    <div className={styles.homePage}>
      <Banner list={topBanners} />
      <ShortCut />
      <Belt />
      <TimeLimitSlider data={rest.productDetail.eventList} dispatch={dispatch} />
      <Belt list={middleBanners} />
      <HotRecommend bannerList={bannerList} />
    </div>
  );
}

const mapStateToProps = state => ({
  user: state.user,
  productDetail:state.productDetail,
  bannerList: state.banner.list
})
export default connect(mapStateToProps)(Home)