import React,{useState, useEffect} from 'react';

import style from './index.less'
import viptext from '../../images/baijin-text.png';
import useInterval from '@/hooks/useInterval';


const textArr = ['会员专属折扣权益','面对面面对面驱动器','喷雾瓶抢跑我抢跑我抛弃'];


const UserInfo = props => {
  const {user} = props;
  const [count, setCount] = useState(0);
  useInterval(
    () => {
      // setTxt(`${count - 1}s后重新发送`);
      if (count === 1) {
        setCount(-1)
      }else{
        setCount(count + 1);

      }
    },
    3000
  );
  console.log('id',count)
  return (
    <div className={style['vip-adv']}>
      <div className={style['df']}>
        <img src={viptext} alt='' className={style['vip-img']} />
        <div className={style['line']} />
        <div className={style['text-box']} style={{transform: `translateY(${-40 * count}px)`}}>
          {
            textArr.map(item => {
              return (
              <div className={style['slider-text']}>{item}</div>
              )
            })
          }
        </div>
       
       
      </div>
      <div className={style['btn-more']}>立即查看</div>
    
     
    </div>
  )
}
UserInfo.defaultProps = {
  user:{
    userInfo:{}
  }
}
export default UserInfo