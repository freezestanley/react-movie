import React,{useState} from 'react';

import style from './index.less'

import draw from '../../images/draw.png';
import exchange from '../../images/exchange.png';
import integral from '../../images/integral.png';
import menu_vip from '../../images/menu-vip.png';
import cardpack from '../../images/cardpack.png';
import router from 'umi/router';

const UserInfo = props => {
  const {user} = props;
  const gotourl = type => {
    if(type === 'order'){
      router.replace('/orders');
    }
  }
  return (
      <div className={style['menu-list']}>
        <div className={style['menu-item']} onClick={() => gotourl('order')}>
          <img src={exchange} alt='order' />
          <div className={style['menu-name']}>兑换</div>
        </div>
        <div className={style['menu-item']} onClick={() => gotourl('order')}>
          <img src={cardpack} alt='vip' />
          <div className={style['menu-name']}>卡券包</div>
        </div>
        <div className={style['menu-item']} onClick={() => gotourl('order')}>
          <img src={draw} alt='userinfo' />
          <div className={style['menu-name']}>抽奖</div>
        </div>
        <div className={style['menu-item']} onClick={() => gotourl('order')}>
          <img src={integral} alt='service' />
          <div className={style['menu-name']}>积分</div>
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