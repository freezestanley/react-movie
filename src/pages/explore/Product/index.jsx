import React from 'react';
import styles from './index.module.less';

export default ({ logo, name, desc }) => {
  return (
    <div className={styles['product']}>
      <img className={styles['logo']} src={logo} />
      <div className={styles['name']}>{name}</div>
      <div className={styles['desc']}>{desc}</div>
    </div>
  );
};
