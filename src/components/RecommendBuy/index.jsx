import React ,{useEffect}from 'react';
import { connect } from 'dva';
import router from 'umi/router'
import RecommendItem from './rec';
import style from './index.less';

function RecommendBuy(props){
  const { recommend: {list=[]}, dispatch } =props
  useEffect(() => {
    (async function() {
      await dispatch({ type: 'recommend/getBanner', payload: { bannerType: [6] } });
    })();
  }, [dispatch]); //
  return  <div className={style.SpikeR}>
  <div className={style.SpikeRItem}>
    <div className={style.beebuy}>
      <span>盎司会员都在买</span>
      <div className={style.beemore} onClick={ () => router.push('./')}>
        更多商品 
        <img src={require('./images/arrow.svg')} alt=""/>
      </div>
    </div>
    <div  className={style.recommend}>
      {list.map((item,index) => <RecommendItem key={index} info={item} />)}
    </div>
  </div>
</div>
}
export default connect(state=>({recommend:state.recommend}))(RecommendBuy)