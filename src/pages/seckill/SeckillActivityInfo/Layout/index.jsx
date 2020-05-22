import React from 'react';
import DigitalCountdown from '@/components/DigitalCountdown';
import styles from './index.less';

export default ({ title, timeDesc, time, children }) => {
  return (
    <div className={styles['activity']}>
      <div className={styles['header']}>
        <div className={styles['title']}>{title}</div>
        <div className={styles['time']}>
          <span className={styles['label']}>{timeDesc}</span>
          <DigitalCountdown date={time} />
        </div>
      </div>
      <div className={styles['body']}>{children}</div>
    </div>
  );
};
