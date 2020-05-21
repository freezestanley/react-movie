import React from 'react';
import styles from './index.less'
import Countdown from "react-countdown";
const renderer = ({ hours, minutes, seconds}) => {
    return (<div ><span>
      {hours}</span>:<span>{minutes}</span>:<span>{seconds}
      </span></div>);
};

export default ({hours, minutes, seconds,} )=>{

  // useEffect(() => {
    
  //   return () => {
  //     cleanup
  //   };
  // }, [isover]);
  return(
    <div className={styles.ActivityBanner}>
      <div className={styles.ActivityBannerHead}>
        <div>腾讯视频会员</div>
        <div>
          <span>
            据活动开始
          </span>
          <Countdown date={Date.now() + 50000000} renderer={renderer} />

        </div>
      </div>
      {/* <div className={styles.Spike}>

        <div className={styles.SpikeDetail}>秒杀活动已售罄，每天早上10 : 00开</div>
        <div className={styles.SpikeMore}>查看该商品更多折扣</div>


      </div> */}
      
     
      <div className={styles.ActivityBannerCon}>

        <div >
          <p>¥<span>39</span></p>
          <p>原价<span>¥10</span></p>

        </div>
        <div >

        </div>  
        
        <div>
          <p>腾讯视频会员vip年卡</p>
          <p><span>送一年芒果视频会员</span> <span>剩余30件</span></p>
          <div className={styles.progress_bar}>
            <div className={styles.progress}> </div>
          </div>
          

        </div>
        
      </div>
    </div>
  )
}