import React from 'react';
import styles from './index.module.less';

export default ({ id, title, children }) => {
  return (
    <div id={id} className={styles['section']}>
      <div className={styles['title']}>{title}</div>
      <div>{children}</div>
    </div>
  );
};
