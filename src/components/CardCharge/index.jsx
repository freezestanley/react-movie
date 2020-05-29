import React from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {Toast} from 'zarm'
import dayjs from 'dayjs'
import map   from 'lodash/map' 


import styles from './index.less';
 const CardList=(info)=>{
 const { name, num, secret, expiredTime } = info.info;
   
   return(
    <div className ={styles.cardcharge}>
      <div>
        <span>{name}</span>
        <span> 有效期至： {dayjs(expiredTime).format('YYYY-MM-DD ')}</span>
      </div>
      <div> 激活方式：请通过"订单详情"页面点击链接备份激活方式：请通过"订单详情"页面点击链接备份</div>
      {num&& <div>
        <span>卡号</span>
        <span>{num}</span>
        
        <CopyToClipboard text={num}
          onCopy={() => Toast.show('复制成功') }>
          <span>复制</span>
        </CopyToClipboard>
       
      </div>}
    
     {!num &&<div>
        <span>卡密</span>
        <a href={secret}>点击兑换</a>
        <CopyToClipboard text={secret}
          onCopy={() => Toast.show('复制成功') }>
          <span>复制</span>
        </CopyToClipboard>
      </div>}
     {num&&<div>
        <span>卡密</span>
        <span>{secret}</span>
        <CopyToClipboard text={secret}
          onCopy={() => Toast.show('复制成功') }>
          <span>复制</span>
        </CopyToClipboard>
      </div>}
   </div>
   )
   
 }
export default (props)=>{
  const formatCard = (card) => {
    const { giftNo={}, giftSecret, cardNo, cardSecret, expiredTime, productName } = card;
    const mainProduct = {};
    /* 主商品开始 */
    // 没有赠品时主商品的名称、卡号、卡密不用解析，直接取
    if (!giftNo && !giftSecret) {
      mainProduct.name = productName;
      mainProduct.num = cardNo;
      mainProduct.secret = cardSecret;
    } else {
      mainProduct.name =(cardNo || cardSecret).split(':')[0];
      if (cardNo) {
        mainProduct.num = cardNo.replace(`${mainProduct.name}:`, '');
      }
      if (cardSecret) {
        mainProduct.secret = cardSecret.replace(`${mainProduct.name}:`, '');
      }
    }
    mainProduct.expiredTime= expiredTime
    /* 主商品结束 */
  
   /* 赠送商品开始 */
   let list =[];
   let giftProductList = []
   if (giftNo || giftSecret) {
    list = (giftNo || giftSecret).split('|');
    giftProductList = map(list, (litem, idx) => {
        const giftProduct = {
          name: litem.split(':')[0],
        };
        if (giftNo) {
          giftProduct.num=giftNo.split('|')[idx].replace(`${giftProduct.name}:`, '');
        }
        if (giftSecret) {
          giftProduct.secret=giftSecret.split('|')[idx].replace(`${giftProduct.name}:`, '');
        }
        return giftProduct
    });
   }
  
   /* 赠送商品结束 */
   return [mainProduct].concat(giftProductList);
  }
  const {orderCardList}=props.info
  const data=formatCard(orderCardList[0])
  return(
    <>
      {data.map((item,index)=>{
        return (
          <CardList  key ={index} info={item}/>
        )
      })
    }
    </>
  )
}