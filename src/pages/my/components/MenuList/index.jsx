import React,{useState} from 'react';

import style from './index.less'

import menu_userinfo from '../../images/menu-userinfo.png';
import menu_order from '../../images/menu-order.png';
import menu_service from '../../images/menu-service.png';
import menu_vip from '../../images/menu-vip.png';
import router from 'umi/router';
import QRcode from '@/components/Home/Banner/QRcode';

const UserInfo = props => {
  const {user} = props;
  const gotourl = type => {
    if(type === 'order'){
      router.push('/orders');
    }else if(type === 'userinfo'){
      router.push('userinfo');
    }else if(type === 'service'){
      setCodeVisible(true)
    }else if(type === 'vip'){
      router.push('vip')
    }
  }
  const [codeVisible, setCodeVisible] = useState(false);

  return (
    <div className={style['menu-list-container']}>
      <div className={style['menu-list']}>
        <div className={style['menu-item']} onClick={() => gotourl('order')}>
          <img src={menu_order} alt='order' />
          <div className={style['menu-name']}>我的订单</div>
        </div>
        <div className={style['menu-item']} onClick={() => gotourl('vip')}>
          <img src={menu_vip} alt='vip' />
          <div className={style['menu-name']}>会员专区</div>
        </div>
        <div className={style['menu-item']} onClick={() => gotourl('userinfo')}>
          <img src={menu_userinfo} alt='userinfo' />
          <div className={style['menu-name']}>个人信息</div>
        </div>
        <div className={style['menu-item']} onClick={() => gotourl('service')}>
          <img src={menu_service} alt='service' />
          <div className={style['menu-name']}>联系客服</div>
        </div>
       
      
      </div>
      {
        props.orders.length > 0 &&  
        <div className={style['topay']}>
          <div className={style['df']}>
            <div className={style['dot']} />
            <div className={style['topay-text']}>您尚有进行中的订单未支付哦</div>
          </div>
          
          <div className={style['btn-topay']} onClick={() => router.push('./orders')}>去支付</div>
        </div>
      }
       <QRcode visible={codeVisible} onClose={e=>{
        setCodeVisible(false)
      }}/>
    </div>
  
  )
}
UserInfo.defaultProps = {
  user:{
    userInfo:{}
  }
}
export default UserInfo