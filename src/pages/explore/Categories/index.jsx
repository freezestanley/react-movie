import React, { useState, useEffect, useMemo } from 'react';
import classNames from 'classnames/bind';
import styles from './index.module.less';

const cx = classNames.bind(styles);

export default ({ selected, list, onSelect }) => {
  const curIndex = useMemo(() => {
    return list.findIndex(item => item.id === selected);
  }, [list, selected]);

  return (
    <div className={styles['cates']}>
      {list.map(({ id, name }, idx) => {
        return (
          <div
            key={id}
            className={cx('cate', {
              selected: id === selected,
              prev: curIndex > -1 && idx === curIndex - 1,
              next: curIndex > -1 && idx === curIndex + 1,
            })}
            onClick={() => {
              onSelect && onSelect(id);
            }}
          >
            {name}
          </div>
        );
      })}
      <div
        className={cx('placeholder', {
          next: curIndex > -1 && curIndex === list.length - 1,
        })}
      ></div>
    </div>
  );
};
