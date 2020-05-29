import React from 'react';
import styles from './index.module.less';

export default ({ id, logo, name, desc, onClick }) => {
  return (
    <div className={styles['product']} onClick={onClick}>
      <img className={styles['logo']} src={logo} />
      <div className={styles['name']}>{name}</div>
      <div className={styles['desc']}>{desc}</div>
    </div>
  );
};
