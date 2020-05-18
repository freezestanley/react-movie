import React from 'react';
import { connect } from 'dva';
import router from 'umi/router';
import styles from './index.less';


function my(props){

  console.log(props)

  return (
    <div className={styles.myPage}>
      <div className='me_avatar'>
        <div className='me_avatar-img'  >
           <div  className='img' src="" alt=""/>
         </div>
        <div className='me_vip'></div>
        <p className='me_nickname'>王小明</p>
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
    </div>
  );
}

export default connect(state=>state)(my)