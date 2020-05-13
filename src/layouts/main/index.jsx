import React from 'react';
import cns from 'classnames';
import 'zarm/dist/zarm.min.css';

import styles from './index.less';

export default function Layout({ className, hasNav, children, ...rest }) {
  return (
    <div className={cns(styles.zLayout, className)}>
      <div className='z-container'>{children}</div>
      {hasNav && <div className='z-navbar'></div>}
    </div>
  )
}