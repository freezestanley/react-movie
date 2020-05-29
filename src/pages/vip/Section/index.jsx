import React from 'react';
import classNames from 'classnames/bind';
import styles from './index.module.less';

const cx = classNames.bind(styles);

export default ({ title, children, className }) => {
  return (
    <div className={cx('section', className)}>
      <div className={styles['header']}>
        <div className={styles['title']}>{title}</div>
      </div>
      <div className={styles['body']}>{children}</div>
    </div>
  );
};
