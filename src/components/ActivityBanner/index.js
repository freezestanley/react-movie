import React from 'react';
import styles from './index.less'

export default ()=>{
  return(
    <div className={styles.ActivityBanner}>
      <div className={styles.ActivityBannerHead}>
        <div>腾讯视频会员</div>
        <div>
          <span>
            据活动开始
          </span>
          <span>
            07
          </span>:
          <span>
            02
          </span>:
          <span>
            22
          </span>
        </div>
      </div>
      
     
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