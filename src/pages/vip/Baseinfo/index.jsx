import React, { Fragment,useState } from 'react';
import Header from './Header';
import Card from './Card';
import Features from './Features';
import styles from './index.module.less';
import Hints from '../Hint';

export default ({ info }) => {
  const [codeVisible, setCodeVisible] = useState(false);

  return (
    <Fragment>
      <div className={styles['main']}>
        <Header />
        <Card info={info} />
      </div>
      <div className={styles['features']}>
        <Features />
      </div>
      <div   onClick={()=>{setCodeVisible(true)}} className={styles['attention']}>会员平台用户须知 ></div>
      <Hints visible={codeVisible} onClose={e=>{
        setCodeVisible(false)
        console.log(1)
        }}/>
    </Fragment>
  );
};
