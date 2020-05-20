import React ,{ useState }from 'react';
import styles from './index.less'


export default ()=>{
  const [isShow, setShow] = useState(false);

 
  return(
    <div className={styles.ItemDetail}>
      <div className={styles.ItemDetaiTitle}>腾讯视频会员+盎司会员白金卡</div>
      <div  className={styles.ItemDetaiContainer }>
        <div>
          <span>订单号</span>
          <span></span>
        </div>
        <div>
          <span>充值账号</span>
          <span>11</span>
        </div>
        {isShow&&(<><div>
          <span>产品规格</span>
          <span>111</span>
        </div>
        <div>
          <span>原价</span>
          <span></span>
        </div>
        <div>
          <span>会员价</span>
          <span></span>
        </div>
        <div>
          <span>会员费</span>
          <span></span>
        </div>
        <div>
          <span>实际支付</span>
          <span></span>
        </div>
        <div>
          <span>时间</span>
          <span></span>
        </div></>)}
      </div>
      <div className={styles.ShowMore}>
        <span onClick={()=>{setShow(!isShow)}}>{isShow?'收起详情':'显示详情'}</span>

       <div>查看更多折扣商品</div>

      </div>

    </div>

  )
}