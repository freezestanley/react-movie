import RecommendItem from './rec';
import React from 'react';
import style from './index.less';
export default (props)=>{
  return  <div className={style.SpikeR}>
  <div className={style.SpikeRItem}>
    <div>
      <span>蜜蜂会员都在买</span><span onClick={''}>更多 ></span>
    </div>
    <div >
      <div>  <RecommendItem /></div>
      <div>  <RecommendItem /></div> 
      <div>  <RecommendItem/></div> 
      <div>  <RecommendItem /></div>
    </div>
  </div>
 

</div>
}