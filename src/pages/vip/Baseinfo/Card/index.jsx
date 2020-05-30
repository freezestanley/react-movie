import React, { Fragment } from 'react';
import { connect } from 'dva';
import withRouter from 'umi/withRouter';
import superCodePay from '@/utils/handlePay';
import { formatDate } from '@/utils/tools';
import styles from './index.module.less';

export default connect(state =>({ user: state.user }))(withRouter(({ info, dispatch, user, history }) => {
  const { membershipList:[vipInfo={}], isVIP, userId, userInfo } = user
  const buyVip = () => {
    if (!userId) {
      const sourcePage = window.encodeURIComponent(`${window.location.pathname}${window.location.search}`);
      history.push({ pathname: '/login', query: { sourcePage } });
      return;
    }
    const formData = {
      payAmount: vipInfo.lowerPrice,
      payType: 1,
    }
    superCodePay({ dispatch, type: 'order/createMemberOrder',  formData, callback(){
    } });
  };
  return (
    <div className={styles['card']}>
      <div className={styles['card-inner']}>
        <div className={styles['name']}>盎司会员白金卡</div>
        <div className={styles['desc']}>全场商品会员价5折起</div>
        {isVIP ? (
          <div className={styles['expireTime']}>{formatDate(userInfo.membershipExpiredTime, 'YYYY-MM-DD')}到期</div>
        ) : (
          <Fragment>
            <div className={styles['price']}>
              <div className={styles['price-current']}>
                <span className={styles['price-current-value']}>{vipInfo.lowerPrice|| 9.9}</span>
                <span className={styles['price-current-unit']}>元/年</span>
              </div>
              <span className={styles['price-original']}>原价{vipInfo.originalPrice || 99}元/年</span>
            </div>
            <div className={styles['join']} onClick={buyVip}>
              立即开通
            </div>
          </Fragment>
        )}
      </div>
    </div>
  );
}));
