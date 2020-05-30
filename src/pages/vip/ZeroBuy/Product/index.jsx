import React from 'react';
import withRouter from 'umi/withRouter';
import { getSourcePageStr } from '@/utils/tools';
import { connect } from 'dva';
import styles from './index.module.less';

export default withRouter(connect(state => ({ user: state.user }))(({ name, user, logo, price, id, history }) => {
  const onClickFn = () => {
    const { userId } = user;
    if (userId) {
      history.push({ pathname: '/topup', query: { id } });
    } else {
      history.push({ pathname: '/login', query: { sourcePage: getSourcePageStr() } });
    }
  };
  return (
    <div className={styles['product']} onClick={onClickFn}>
      <div className={styles['name']}>
        {name}
        <span className={styles['tag']}>会员专享</span>
      </div>
      <div className={styles['price']}>
        <div className={styles['price-current']}>
          <span className={styles['price-current-value']}>￥</span>
          <span className={styles['price-current-unit']}>0</span>
        </div>
        <div className={styles['price-original']}>￥{price}</div>
      </div>
    </div>
  );
}));
