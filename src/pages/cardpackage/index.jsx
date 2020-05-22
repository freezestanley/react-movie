import React from 'react'
import styles from './index.less';
import Button from './Button'
import SwitchAccount from '@/components/SwitchAccount';
import SelectMenber from './SelectMenber'

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
          <SwitchAccount/>
      </div>
    
      
   

    </div>
      <div className={styles.CardPackageMainGet}>
         <Button>领取</Button> 
      </div>


    </div>
    <SelectMenber/>
   
  
  </div>
}