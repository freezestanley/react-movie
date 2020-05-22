import React from 'react';
import styles from './index.less';

export default ({ children, onClick ,width,color}) => {
  return (
    <div className={styles['btn']} style={{width:width,background:color}} onClick={onClick}>
      {children}
    </div>
  );
};
