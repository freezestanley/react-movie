import React from 'react';
import styles from './index.less'
export default ({ children, onClick })=>{
  return(

  
  <div className={styles['pop_up']}>
    <div className={styles['popup-box']}>
    <img src={require('../../images/pen.png')} />
    <div className={styles['body']}>{children}</div>
    </div>
    
</div>
  )
}