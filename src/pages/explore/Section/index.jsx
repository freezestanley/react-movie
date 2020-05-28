import React from 'react';
import styles from './index.module.less';

export default ({ title, children }) => {
  return (
    <div className={styles['section']}>
      <div className={styles['title']}>{title}</div>
      <div>{children}</div>
    </div>
  );
};
