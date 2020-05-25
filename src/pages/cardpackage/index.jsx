import React from 'react'
import './index.less';
import Button from './Button'
import SwitchAccount from '@/components/SwitchAccount';
import SelectMenber from './SelectMember'
import TobBack from './TopBack'
const mock={
  title:' 盎司白金视听年卡',
  content:' 7月券·热门会员月卡多选一 '
}
export default ()=>{
  return <div>
   <TobBack info={mock}/>
    <div className='CardPackage'>
    <div className='CardPackageMain'>
      <SelectMenber/>
      <div className='CardPackageMainPut'>
        <SwitchAccount/>
      </div>
    </div>
      <div className='CardPackageMainGet'>
         <Button>领取</Button> 
      </div>
    </div>
  </div>
}