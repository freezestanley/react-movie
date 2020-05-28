import React,{useState} from 'react';

import style from './index.less'

import menu_userinfo from '../../images/menu-userinfo.png';
import menu_order from '../../images/menu-order.png';
import menu_service from '../../images/menu-service.png';
import menu_vip from '../../images/menu-vip.png';
import router from 'umi/router';

const UserInfo = props => {
  const {user} = props;
  const gotourl = type => {
    if(type === 'order'){
      router.replace('/orders');
    }
  }
  return (
    <div className={style['menu-list-container']}>
      <div className={style['menu-list']}>
        <div className={style['menu-item']} onClick={() => gotourl('order')}>
          <img src={menu_order} alt='order' />
          <div className={style['menu-name']}>我的订单</div>
        </div>
        <div className={style['menu-item']} onClick={() => gotourl('order')}>
          <img src={menu_vip} alt='vip' />
          <div className={style['menu-name']}>会员专区</div>
        </div>
        <div className={style['menu-item']} onClick={() => gotourl('order')}>
          <img src={menu_userinfo} alt='userinfo' />
          <div className={style['menu-name']}>个人信息</div>
        </div>
        <div className={style['menu-item']} onClick={() => gotourl('order')}>
          <img src={menu_service} alt='service' />
          <div className={style['menu-name']}>联系客服</div>
        </div>
       
      
      </div>
      <div className={style['topay']}>
        <div className={style['df']}>
          <div className={style['dot']} />
          <div className={style['topay-text']}>您尚有进行中的订单未支付哦</div>
        </div>
        
        <div className={style['btn-topay']}>去支付</div>
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