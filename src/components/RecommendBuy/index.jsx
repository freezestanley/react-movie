import RecommendItem from './rec';
import React from 'react';
import style from './index.less';
export default (props)=>{
  const list = props.info || []
  return  <div className={style.SpikeR}>
  <div className={style.SpikeRItem}>
    <div>
      <span>蜜蜂会员都在买</span><span onClick={()=>{console.log(' ')}}>更多 ></span>
    </div>
    <div >
      {list.map((item,index) => <RecommendItem key={index} info={item} />)}
    </div>
  </div>
</div>
}