import React, { useEffect } from 'react';
import { connect } from 'dva';
import HotRecommend from '@/components/HotRecommend'
import Banner from '@/components/Home/Banner';
import ShortCut from '@/components/Home/ShortCut';
import Belt from '@/components/Home/Belt';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from './style/index.less';
import TimeLimitSlider from '@/components/TimeLimitSlider';


function Home ({ dispatch, ...rest }) {
  useEffect(() => {
    dispatch({ type: 'banner/getBanner', payload: {} });
    dispatch({ type: 'productDetail/getEventList', payload: {} });
  }, [dispatch]);
  console.log('rest',rest);
  
  return (
    <div className={styles.homePage}>
      <Banner />
      <ShortCut />
      <Belt />
      <TimeLimitSlider data={rest.productDetail.eventList} dispatch={dispatch} />
      <HotRecommend />
    </div>
  );
}

const mapStateToProps = state => ({
  user: state.user,
  productDetail:state.productDetail
})
export default connect(mapStateToProps)(Home)