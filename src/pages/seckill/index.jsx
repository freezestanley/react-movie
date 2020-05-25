import React, { useState, useEffect, useCallback } from 'react';
import styles from './index.module.less';
import { ProductHead } from '@/components/Product';
import TopupNote from '@/components/Card/TopupNote';
import RecommendBuy from '@/components/RecommendBuy';
import SeckillActivityInfo from './SeckillActivityInfo';
import BuyFooter from '@/components/BuyFooter';

const getDetail = id => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        beginTime: 'string',
        beginTimestamp: 1590057373923,
        cornerMark: 'string',
        currStatus: 2,
        currTime: 'string',
        currTimestamp: 1590057473923,
        discount: 0.4,
        discountPrice: 10,
        endTime: 'string',
        endTimestamp: 1590057910629,
        eventBeginDate: 'string',
        eventCode: 'string',
        eventEndDate: 'string',
        eventName: 'string',
        id: 0,
        itemId: 0,
        itemName: 'VIP年卡',
        limitBuy: 'Y',
        limitBuyCount: 2,
        nextBeginTimestamp: 0,
        nextEndTimestamp: 0,
        onlyForVip: 'string',
        originPrice: 39,
        productId: 0,
        productName: '腾讯视频会员',
        productDesc: '<p><i>1</i>激活方式：请通过"订单详情"页面点击链接激活VIP</p><p><i>2</i>请您在2021年12月07日前开通本会员卡</p><p><i>3</i>赠品使用方式：<p>芒果视频：关注“芒果互联网电视助手”微信公众号，点击右下角“开通会员”→“会员卡兑换”输入兑换码激活会员；”</p><p>网易云音乐：“网易云音乐APP”—“账号”—“会员中心”—“立即开通”—“使用会员兑换码”（区分大小写）；</p><p>话费：凭兑换码，微信联系“盎司一起”客服完成充值。</p></p><p><i>4</i>如有疑问，请联系公众号客服：盎司一起</p>',
        productSmallTitle: 'string',
        productType: 0,
        quantity: 100,
        stock: 10,
      });
    }, 500);
  });
};

export default () => {
  const [detail, setDetail] = useState();

  const fetch = useCallback(() => {
    getDetail().then(res => {
      setDetail(res);
    });
  }, []);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return (
    <div className={styles.seckillContainer}>
      <ProductHead
        corner={''}
        title={'腾讯视频蜜蜂会员七五折起'}
        desc={'不负好时光，月卡年卡任你挑'}
        imgUrl={'#'}
      />
      {detail && <SeckillActivityInfo info={detail} />}
      { detail && <div className={styles.topupOther}>
          <TopupNote nodes={detail.productDesc || ''} />
    </div> }
      <RecommendBuy />
      <BuyFooter/>
    </div>
  );
};
