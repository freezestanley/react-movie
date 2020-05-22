import React from 'react';
import { connect } from 'dva';
import router from 'umi/router';
import { Modal } from 'zarm';
import styles from './index.less';


function MyPage(props){
  const userInfo = props.user.userInfo;
  console.log('[8] index.jsx: ', props);
  const handleExit = () => {
    props.dispatch({ type: 'user/loginOut' })
  }

  return (
    <div className={styles.myPage}>
      <div className='me_avatar'>
        <div className='me_avatar-img'  >
           <div  className='img' src="" alt=""/>
         </div>
        {userInfo.isVIP && <div className='me_vip' />}
        <p className='me_nickname'>{userInfo.nickname}</p>
      </div>
      <div className='me_container'>
        <ul>
          <li className='me_container-pro'>会员权益</li>
          <li className='me_container-order'>我的订单</li>
          <li className='me_container-change'>兑换码</li>
          <li className='me_container-service'>联系客服  </li>
        </ul>
      </div>
      <button onClick={() => router.push('/login')}>登录</button>
      <button onClick={handleExit}>退出</button>
      <pre>{JSON.stringify(props.user, null, 2)}</pre>
    </div>
  );
}

export default connect(state => state)(MyPage)