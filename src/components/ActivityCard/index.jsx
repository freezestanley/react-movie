import React, { useCallback } from 'react';
import { connect } from 'dva';
import withRouter from 'umi/withRouter';

import styles from './index.less'
const ActivityCard = props => {
  const { history, user: { userId } }= props;
  let progress = 0;
  if(props.data.stock !== 0){
    const sell = ((props.data.quantity-props.data.stock)/props.data.quantity) * 100;
    progress = 60 + (sell * 0.4);
  }
  const onClickFn = useCallback(() => {
    history.push(`/seckill?id=${props.data.id}`);
  }, [props.data.id, history]);
  return (
    <div className={styles['acitivity-card']} onClick={onClickFn}>
      <div className={styles['main-part']}>
        <div className={styles['right-top']}>
          <img src={props.data.productImage} className={styles['brand']} alt="" />

        </div>

        <div className={styles['card-title']}>{props.data.eventName}</div>
      
        <div className={styles['card-description']}>
          {
           props.data.onlyForVip === 'Y' &&  <span className={styles['member-discount']}>会员优惠</span>
         
          }
          {props.data.description}
        </div>
        <div className={styles['price-box']}>
        <div className={styles['now-price']}><span className={styles['yuan']}>￥</span>{props.data.discountPrice}</div>
        <div className={styles['origin-price']}>￥{props.data.originPrice}</div>
        </div>
      </div>
      <div className={styles['bottom-part']}>
        <div className={styles['rest']}>{props.data.stock === 0 ? '已售罄' : progress + '%'}</div>
        <div className={styles['progress']}>
          <div className={styles['progress-value']} style={{width: progress + '%'}}></div>
        </div>
      </div>
    </div>
  )
}
export default withRouter(connect(state => ({ user: state.user }))(ActivityCard));