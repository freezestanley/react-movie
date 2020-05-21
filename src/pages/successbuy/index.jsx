import React from 'react';
import styles from './index.less'
export default ()=>{
  return (
    <div className={styles.Success}> 
       <div className={styles.SuccessTop}>
         <div className={styles.SuccessTopIcon}></div>
         <div className={styles.SuccessTopText}>
           盎司白金视听年卡
         </div>

       </div>
       <div className={styles.SuccessContent}> 
        <div>
          <span>支付金额</span>
          <span>¥299</span>
        </div>
        <div>
          <span>商品规格</span>
          <span>年卡大礼包</span>
        </div>


       </div>
       <div className={styles.SuccessBlank}>
         <span></span>
         <span></span>
         <span></span>
       </div>
       <div className={styles.SuccessBottom}>
         <div>我的卡券包</div>
         <div>点击查看您的盎司白金视听年卡大礼包</div>
       </div>
   


    </div>
  )
}