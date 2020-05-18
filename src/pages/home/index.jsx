import React, { useEffect } from 'react';
import { connect } from 'dva';
import Banner from '@/components/Home/Banner';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from './style/index.less';


function Home ({ dispatch }) {
  useEffect(() => {
    dispatch({ type: 'banner/getBanner', payload: {} });
  }, [dispatch]);
  return (
    <div className={styles.homePage}>
      <Banner />
    </div>
  );
}

const mapStateToProps = state => ({
  user: state.user
})
export default connect(mapStateToProps)(Home)