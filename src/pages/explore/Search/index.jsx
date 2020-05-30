import React from 'react';
import { ReactComponent as SearchSvgIcon } from '@/assets/svg/search.svg';
import styles from './index.module.less';

export default ({ onClick }) => {
  return (
    <div className={styles['search']} onClick={onClick}>
      <SearchSvgIcon className={styles['icon']} />
      <div className={styles['placeholder']}>请输入商品名称</div>
    </div>
  );
};
