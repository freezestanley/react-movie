import React, { Fragment } from 'react';
import Header from './Header';
import Card from './Card';
import Features from './Features';
import styles from './index.module.less';

export default () => {
  return (
    <Fragment>
      <div className={styles['main']}>
        <Header />
        <Card />
      </div>
      <div className={styles['features']}>
        <Features />
      </div>
      <div className={styles['attention']}>会员平台用户须知 ></div>
    </Fragment>
  );
};
