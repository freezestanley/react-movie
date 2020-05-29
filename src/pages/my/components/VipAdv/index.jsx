import React,{useState, useEffect} from 'react';

import style from './index.less'
import viptext from '../../images/baijin-text.png';
import useInterval from '@/hooks/useInterval';
import router from 'umi/router';

const textArr = ['会员专属折扣权益','面对面面对面驱动器','喷雾瓶抢跑我抢跑我抛弃'];


const UserInfo = props => {
  const [count, setCount] = useState(0);
  useInterval(
    () => {
      // console.log('id',count,textArr.length, count === textArr.length)

      if (count === textArr.length -1 ) {
        setCount(0)
      }else{
        setCount(count + 1);
      }
    },
    3000
  );
  return (
    <div className={style['vip-adv']}>
      <div className={style['df']}>
        <img src={viptext} alt='' className={style['vip-img']} />
        <div className={style['line']} />
        <div className={`${style[`text-box-${count}`]}`}>
          {
            textArr.map((item,index) => {
              return (
              <div key={index} className={style['slider-text']}>{item}</div>
              )
            })
          }
        </div>
       
       
      </div>
      <div className={style['btn-more']} onClick={() => router.push('/vip')}>立即查看</div>
    
     
    </div>
  )
}
UserInfo.defaultProps = {
  user:{
    userInfo:{}
  }
}
export default UserInfo