import React from 'react';
import { getSourcePageStr } from '@/utils/tools'

import style from './index.less'
import baijinvip from '../../images/baijinvip.png';
import nologin from '../../images/nologin.png';
import router from 'umi/router';
const UserInfo = props => {
  const {user} = props;
  return (
    <div className={style['me_userinfo']}>
      {
        user.userId ? (
          <div className={style['me-content']}>
          <img className={style['avatar']} alt='' src={user.userInfo.avatarUrl} />
          <div className={style['phone-info']}>
            <div className={style['phone']}>{user.userInfo.mobileNumber}</div>
            {
             user.isVIP ?  <img className={style['baijinvip']} src={baijinvip} alt='vip' /> : <div className={style['gotomember']} onClick={() => router.push({pathname:'/vip'})}>开通会员<div className={style['rightarr']} /></div>
            
            }
          </div>
        </div>
        ):
        (
          <div className={style['me-content']}>
          <img className={style['avatar']} alt='' src={nologin} />
          <div className={style['phone-info']} onClick={() => router.push({ pathname:'/login', query: { sourcePage: getSourcePageStr()}})}>
            <div className={style['phone']}>点击登录/注册</div>
          </div>
        </div>
        )
      }
    
     
    </div>
  )
}
UserInfo.defaultProps = {
  user:{
    userInfo:{}
  }
}
export default UserInfo