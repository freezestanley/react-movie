import React from 'react';
import Countdown from 'react-countdown';
import pad from 'pad';
import styles from './index.less';

const Unit = ({ value }) => {
  return <span className={styles['unit']}>{pad(2, value.toString(), '0')}</span>;
};

const Separator = () => {
  return <span className={styles['separator']}>:</span>;
};

const renderer = ({ hours, minutes, seconds }) => {
  return (
    <div className={styles['countdown']}>
      <Unit value={minutes} />
      <Separator />
      <Unit value={seconds} />
    </div>
  );
};

export default ({ date, onComplete }) => {
  return <Countdown date={date} renderer={renderer} onComplete={onComplete} />;
};
