import React,{useState} from 'react';

import style from './index.less'
import baijinvip from '../../images/baijinvip.png';
import nologin from '../../images/nologin.png';
import viptext from '../../images/baijin-text.png';

const UserInfo = props => {
  const {user} = props;
  return (
    <div className={style['vip-adv']}>
      <div className={style['df']}>
        <img src={viptext} alt='' className={style['vip-img']} />
        <div className={style['line']} />
        <div className={style['slider-text']}>会员专属折扣权益</div>
      </div>
      <div className={style['btn-more']}>立即查看</div>
    
     
    </div>
  )
}
UserInfo.defaultProps = {
  user:{
    userInfo:{}
  }
}
export default UserInfo