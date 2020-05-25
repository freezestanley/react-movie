import React from 'react';
import { connect } from 'dva';
import router from 'umi/router';
import styles from './index.less';
import Dialog from '../../components/Dialog';
import MenuItem from './MenuItem'
import Charge from '../../components/Charge'


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
           <div  className='img'/>
         </div>
        {userInfo.isVIP && <div className='me_vip' />}
        <p className='me_nickname'>{userInfo.nickname}</p>
      </div>
      <div className='me_container'>
        <MenuItem  title='会员权益' icon={require('./images/order.png')} onClick={()=>{console.log(1)}}/>
        <MenuItem  title='会员权益' icon={require('./images/contact.png')} onClick={()=>{console.log(1)}}/>
        <MenuItem  title='会员权益' icon={require('./images/order.png')} onClick={()=>{console.log(1)}}/>
        <MenuItem  title='会员权益' icon={require('./images/contact.png')} onClick={()=>{console.log(1)}}/>
      </div>
      <button onClick={() => router.push('/login')}>登录</button>
      <button onClick={handleExit}>退出</button>
      <pre>{JSON.stringify(props.user, null, 2)}</pre>
      <Dialog/>
      <Charge/>
    </div>
  );
}

export default connect(state => state)(MyPage)