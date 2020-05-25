import React from 'react';
import styles from './index.less';

export default ({ children, onClick }) => {
  return (
    <div className={styles['btn']} onClick={onClick}>
      {children}
    </div>
  );
};
