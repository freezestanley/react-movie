import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './index.module.less';

const cx = classNames.bind(styles);

export default ({ selected, list, onSelect }) => {
  return (
    <div className={styles['cates']}>
      {list.map(({ id, name }) => {
        return (
          <div
            key={id}
            className={cx('cate', {
              selected: id === selected,
            })}
            onClick={() => {
              onSelect && onSelect(id);
            }}
          >
            {name}
          </div>
        );
      })}
    </div>
  );
};
