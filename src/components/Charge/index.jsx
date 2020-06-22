import React from 'react';
import styles from './index.less';
export default ({ txt, details }) => {
  return (
    <div className={styles.Intruction}>
      <div className={styles.head}>{txt}</div>
      <div className={styles.container}>
        {details}
      </div>
    </div>

  )
}