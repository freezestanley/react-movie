import React, { useEffect } from 'react';
import { connect } from 'dva';
import HotRecommend from '@/components/HotRecommend'
import Banner from '@/components/Home/Banner';
import ShortCut from '@/components/Home/ShortCut';
import Belt from '@/components/Home/Belt';
import filter from 'lodash/filter';
import isEmpty from 'lodash/isEmpty';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from './style/index.less';
import TimeLimitSlider from '@/components/TimeLimitSlider';


function Home ({ dispatch,bannerList, ...rest }) {
  const topBanners = filter(bannerList, item => item.bannerType === 1);
  const middleBanners = filter(bannerList, item => item.bannerType === 2);
  const shortCutList = filter(bannerList, item => item.bannerType === 4);
  const hotRecommendList = filter(bannerList, item => item.bannerType === 5);
  useEffect(() => {
    dispatch({ type: 'banner/getBanner', payload: {
      bannerType:[1,2,3,4,5],
      pageSize: 100,
    } });
    dispatch({ type: 'productDetail/getEventList', payload: {} });
  }, [dispatch]);
  console.log('rest',rest,bannerList);
  
  return (
    <div className={styles.homePage}>
      { !isEmpty(topBanners) && <Banner list={topBanners} />}
      { !isEmpty(shortCutList) && <ShortCut list={shortCutList} />}
      { !isEmpty(middleBanners) && <Belt list={middleBanners} /> }
      { !isEmpty(rest.productDetail.eventList) && <TimeLimitSlider data={rest.productDetail.eventList} dispatch={dispatch} />}
      { !isEmpty(hotRecommendList) && <HotRecommend bannerList={hotRecommendList} />}
    </div>
  );
}

const mapStateToProps = state => ({
  user: state.user,
  productDetail:state.productDetail,
  bannerList: state.banner.list
})
export default connect(mapStateToProps)(Home)