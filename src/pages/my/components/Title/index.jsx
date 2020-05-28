import React,{useState} from 'react';

import style from './index.less'
import baijinvip from '../../images/baijinvip.png';
import nologin from '../../images/nologin.png';
import viptext from '../../images/baijin-text.png';

const UserInfo = props => {
  return (
    <div className={style['sub-title']}>
      <div className={style['dash-left']} />
  <div className={style['title-name']}>{props.name}</div>
      <div className={style['dash-right']} />
    </div>
  )
}
UserInfo.defaultProps = {
  user:{
    userInfo:{}
  }
}
export default UserInfo