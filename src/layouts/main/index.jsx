import React from 'react';
import 'zarm/dist/zarm.min.css';

import styles from './index.less';

export default function Layout(props) {
  return (
    <div className={styles.zLayout}>
      <div className='z-container'>{props.children}</div>
    </div>
  )
}