import React, { useEffect } from 'react';
import { connect } from 'dva';
import HotRecommend from '@/components/HotRecommend'
import Banner from '@/components/Home/Banner';
import ShortCut from '@/components/Home/ShortCut';
import Belt from '@/components/Home/Belt';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from './style/index.less';
import sample from '@/assets/sample.png';
import ActivityCard from '@/components/ActivityCard'
import TimeLimitSlider from '@/components/TimeLimitSlider';

const imgList = [
  {
    thumbnail:sample,
    image:sample,
    link:'www.baidu.com'
  },
  {
    thumbnail:sample,
    image:sample,
    link:'www.baidu.com'
  },
  {
    thumbnail:sample,
    image:sample,
    link:'www.baidu.com'
  },
  {
    thumbnail:sample,
    image:sample,
    link:'www.baidu.com'
  },
  {
    thumbnail:sample,
    image:sample,
    link:'www.baidu.com'
  },
  {
    thumbnail:sample,
    image:sample,
    link:'www.baidu.com'
  },
];

function Home ({ dispatch }) {
  useEffect(() => {
    dispatch({ type: 'banner/getBanner', payload: {} });
  }, [dispatch]);
  return (
    <div className={styles.homePage}>
      <Banner />
      <ShortCut />
      <Belt />
      <TimeLimitSlider />
      <HotRecommend list={imgList} />
    </div>
  );
}

const mapStateToProps = state => ({
  user: state.user
})
export default connect(mapStateToProps)(Home)