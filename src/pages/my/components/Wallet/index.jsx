import React,{useState} from 'react';

import style from './index.less'

import draw from '../../images/draw.png';
import exchange from '../../images/exchange.png';
import integral from '../../images/integral.png';
import menu_vip from '../../images/menu-vip.png';
import cardpack from '../../images/cardpack.png';
import router from 'umi/router';
import ExchangeDialog from '@/components/ExchangeDialog';

const UserInfo = props => {
  const {user} = props;
  const [visible, showVisible] = useState(false);
  const gotourl = type => {
    if(type === 'exchange'){
      if(props.user.userId){
        showVisible(true);

      }
    }else if(type === 'card'){
      router.push('/card');
    }
  }
  return (
      <div className={style['menu-list']}>
        <div className={style['menu-item']} onClick={() => gotourl('exchange')}>
          <img src={exchange} alt='order' />
          <div className={style['menu-name']}>兑换</div>
        </div>
        <div className={style['menu-item']} onClick={() => gotourl('card')}>
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
        <ExchangeDialog visible={visible} onCancel={() => showVisible(false)} dispatch={props.dispatch} />
      
   
    </div>
  
  )
}
UserInfo.defaultProps = {
  user:{
    userInfo:{}
  }
}
export default UserInfo