import React,{useState} from 'react';

import style from './index.less'
import baijinvip from '../../images/baijinvip.png';
import nologin from '../../images/nologin.png';
import viptext from '../../images/baijin-text.png';

const UserInfo = props => {
  const {user} = props;
  return (
    <div className={style['vip-adv']}>
      <div>
        <img src={viptext} alt='' className={style['vip-text']} />
      </div>
    
     
    </div>
  )
}
UserInfo.defaultProps = {
  user:{
    userInfo:{}
  }
}
export default UserInfo