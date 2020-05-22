import React from 'react'
import styles from './index.less';
import Button from './Button'
import SwitchAccount from '@/components/SwitchAccount';
import SelectMenber from './SelectMenber'
import TobBack from './TopBack'
const mock={
  title:' 盎司白金视听年卡',
content:' 7月券·热门会员月卡多选一 '
}

export default ()=>{
  return <div>
   <TobBack info={mock}/>

    <div className={styles.CardPackage}>
     
    <div className={styles.CardPackageMain}>
      <SelectMenber/>
      <div className={styles.CardPackageMainPut}>
        <SwitchAccount/>
      </div>
    </div>
      <div className={styles.CardPackageMainGet}>
         <Button>领取</Button> 
      </div>


    </div>
  
   
  
  </div>
}