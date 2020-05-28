import React,{useState} from 'react';

import './index.less'

const UserInfo = props => {
  return (
    <div className='me_avatar'>    
      <p className='me_nickname'>{props.userInfo.nickname}</p>
    </div>
  )
}
UserInfo.defaultProps = {
  userInfo:{}
}
export default UserInfo