import React from 'react';
import style from './index.less';
import { connect } from 'dva';
import { Toast } from 'zarm';
import router from 'umi/router';

const UserInfo = props => {
  const handleExit = () => {
    props.dispatch({ type: 'user/loginOut',callback:() => {
      Toast.show({
        content: '退出成功',
        stayTime: 1500,
        afterClose: () => {
          router.replace('/my')
        }
      });
      
    } })
  }
  console.log('avatar',props)
  return (
    <div className={style.userinfo}>
      <div className={style.row}>
        <label>头像</label>
        <img src={props.user.userInfo.avatarUrl} alt='avatar' />
      </div>
      <div className={style.rowsm}>
        <label>ID</label>
         <div>{props.user.userInfo.id}</div>
      </div>
      <div className={style.rowsm}>
        <label>手机号</label>
        <div>{props.user.userInfo.mobileNumber}</div>

      </div>
      <div onClick={handleExit} className={style['btn-logout']}>退出登录</div>
    </div>
  )
}
UserInfo.defaultProps = {
  user:{
    userInfo:{}
  }
}
export default connect(state => state)(UserInfo)