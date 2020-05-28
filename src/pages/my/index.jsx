import React from 'react';
import { connect } from 'dva';
import router from 'umi/router';
import styles from './index.less';
import MenuItem from './components/MenuItem';
import UserInfo from './components/UserInfo'
function MyPage(props){
  const userInfo = props.user.userInfo;
  console.log('[9] index.jsx: ', props.user);
   console.log(props.banner)
  console.log('[8] index.jsx: ', props);
  const handleExit = () => {
    props.dispatch({ type: 'user/loginOut' })
  }
  return (
    <div className={styles.myPage}>
      {
        props.user.isVIP ? <div></div> : 
        <div>
          <UserInfo />
        </div>
      }
     
      <div className='me_container'>
        <MenuItem  title='会员权益' icon={require('./images/order.png')} onClick={()=>{console.log(1)}}/>
        <MenuItem  title='我的订单' icon={require('./images/contact.png')} onClick={()=>{console.log(1)}}/>
        <MenuItem  title='兑换码' icon={require('./images/order.png')} onClick={()=>{console.log(1)}}/>
        <MenuItem  title='联系客服' icon={require('./images/contact.png')} onClick={()=>{console.log(1)}}/>
      </div>
      <button onClick={() => router.push('/login')}>登录</button>
      <button onClick={handleExit}>退出</button>
      <pre>{JSON.stringify(props.user, null, 2)}</pre>
    </div>
  );
}
export default connect(state => state)(MyPage)