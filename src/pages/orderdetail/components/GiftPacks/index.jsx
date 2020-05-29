import  React from 'react';
import  './index.less';
import router from 'umi/router'
function GiftPacks(){
  return(
    <div className='GiftPacks'>
      <div className='img'></div>
      <div className='check' onClick={()=>{router.push('./card')}}> 点击查看</div>
      <div className='see'> 点击查看您的盎司白金视听年卡大礼包备份</div>
    </div>
  )
}
export default GiftPacks;
