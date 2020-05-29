import React ,{useEffect}from 'react';
import { connect } from 'dva';
import Card from './index';

 function TopupNote(props) {
  const productId=props.info;
  const { mainProduct:{info={}},dispatch}=props; 
  useEffect(() => {
    dispatch({ type: 'mainProduct/getmain', payload: {productId} });
  }, [dispatch,productId]);
  return  (
    <>
    {info.detail&&
    <Card title="充值说明">
      <div className="topup__note" dangerouslySetInnerHTML={{ __html:info.detail }} />
    </Card>}
    </>
  )
}
export default connect(state=>state)(TopupNote)