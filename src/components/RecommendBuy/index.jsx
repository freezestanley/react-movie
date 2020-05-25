import RecommendItem from './rec';
import React ,{useEffect}from 'react';
import style from './index.less';
import { connect } from 'dva';

function RecommendBuy(props){
  const { recommend: {list={}}, dispatch } =props
  useEffect(() => {
    (async function() {
      await dispatch({ type: 'recommend/getBanner', payload: { bannerType: [6] } });
    })();
  }, [dispatch]); //
  return  <div className={style.SpikeR}>
  <div className={style.SpikeRItem}>
    <div>
      <span>蜜蜂会员都在买</span><span onClick={()=>{console.log(' ')}}>更多 <span>></span></span>
    </div>
    <div >
      {list.map((item,index) => <RecommendItem key={index} info={item} />)}
    </div>
  </div>
</div>
}
export default connect(state=>state)(RecommendBuy)