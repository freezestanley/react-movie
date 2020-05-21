import React from 'react'
import styles from './index.less';

export default ()=>{
  return <div>
     <div className={styles.CardPackageHead}>

    </div>

    <div className={styles.CardPackage}>
     
    <div className={styles.CardPackageMain}>
      <div className={styles.CardPackageMainSelect}>
        <span>请选择您想要的会员卡</span><br/>

        <input type="text" placeholder= '请选择' />
        <span>></span>
      </div>
      <div className={styles.CardPackageMainPut}>
        <span>充值账号</span><br/>
        <input type="text" placeholder= '请输入' />
        <img src={require('./images/switch.svg')}  alt=""/>
        <span>微信账号</span>
      </div>
    
      
      <div>

      </div>

    </div>
    <div className={styles.CardPackageMainGet}>
      领取
      
    </div>
    </div>
  </div>
}