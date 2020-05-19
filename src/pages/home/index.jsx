import React, { useEffect } from 'react';
import { connect } from 'dva';
import Portal from '@/components/Portal';
import HotRecommend from '@/components/HotRecommend'
import Banner from '@/components/Home/Banner';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from './style/index.less';
import sample from '@/assets/sample.png';
import ActivityCard from '@/components/ActivityCard'
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
const data = {
  percent:'0.3',
  activityName:'Q币限时秒杀',
  description:'5折特惠秒杀，限时专享'
}


function Home ({ dispatch }) {
  useEffect(() => {
    dispatch({ type: 'banner/getBanner', payload: {} });
  }, [dispatch]);
  return (
    <div className={styles.homePage}>
      <Banner />
      <HotRecommend list={imgList} />
      <ActivityCard data={data} />
    </div>
  );
}

const mapStateToProps = state => ({
  user: state.user
})
export default connect(mapStateToProps)(Home)