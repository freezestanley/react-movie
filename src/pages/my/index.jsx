import React from 'react';
import { connect } from 'dva';
import router from 'umi/router';
import styles from './index.less';
import UserInfo from './components/UserInfo'
import MenuList from './components/MenuList'
import VipAdv from './components/VipAdv';
import Wallet from './components/Wallet'
// import filter from 'lodash/filter';
// import isEmpty from 'lodash/isEmpty';
// import Belt from '@/components/Home/Belt';

function MyPage(props){
  const userInfo = props.user.userInfo;
  console.log('props',props);
  // console.log('[9] index.jsx: ', props.user);
  //  console.log(props.banner)
  // console.log('[8] index.jsx: ', props);
  const handleExit = () => {
    props.dispatch({ type: 'user/loginOut' })
  }
  // const middleBanners = filter(props.bannerList, item => item.bannerType === 2);

  return (
    <div className={styles.myPage}>
      <UserInfo user={props.user} />
      <MenuList />
      <VipAdv />
      <div className={styles['pocket']}>
        <div className={styles['sub-title']}>
          <div className={styles['dash-left']} />
          <div className={styles['title-name']}>我的钱包</div>
          <div className={styles['dash-right']} />
        </div>
        <Wallet />

      </div>
    
      <button onClick={() => router.push('/login')}>登录</button>
      <button onClick={handleExit}>退出</button>
      <pre>{JSON.stringify(props.user, null, 2)}</pre>
    </div>
  );
}
export default connect(state => state)(MyPage)