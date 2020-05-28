import React from 'react';
import { connect } from 'dva';
import router from 'umi/router';
import styles from './index.less';
import MenuItem from './components/MenuItem';
import UserInfo from './components/UserInfo'
import MenuList from './components/MenuList'
import VipAdv from './components/VipAdv';

function MyPage(props){
  const userInfo = props.user.userInfo;
  console.log('props',props);
  // console.log('[9] index.jsx: ', props.user);
  //  console.log(props.banner)
  // console.log('[8] index.jsx: ', props);
  const handleExit = () => {
    props.dispatch({ type: 'user/loginOut' })
  }
  return (
    <div className={styles.myPage}>
      <UserInfo user={props.user} />
      <MenuList />
      <VipAdv />
    
      <button onClick={() => router.push('/login')}>登录</button>
      <button onClick={handleExit}>退出</button>
      <pre>{JSON.stringify(props.user, null, 2)}</pre>
    </div>
  );
}
export default connect(state => state)(MyPage)