import React, { useState, useEffect } from 'react';
import styles from './index.less';
import Recommend from '@/components/RecommendBuy';
import SeckillActivityInfo from './SeckillActivityInfo';

const mockData = {
  beginTime: 'string',
  beginTimestamp: 1590057373923,
  cornerMark: 'string',
  currStatus: 1,
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
  productDesc: 'string',
  productId: 0,
  productName: '腾讯视频会员',
  productSmallTitle: 'string',
  productType: 0,
  quantity: 100,
  stock: 10,
};

export default () => {
  const [detail, setDetail] = useState();

  useEffect(() => {
    setDetail(mockData);
  }, []);

  return (
    <div className={styles.Spike}>
      {detail && <SeckillActivityInfo info={detail} />}

      {/* <div className={styles.SpikeR}>
        <div className={styles.SpikeRItem}>
          <div>
            <span>蜜蜂会员都在买</span>
            <span>更多 ></span>
          </div>
          <div>
            <div>
              <Recommend title="Q币限时优惠" detail="捂着限时秒杀，限时专享" price="274" />
            </div>
            <div>
              <Recommend title="Q币限时优惠" detail="捂着限时秒杀，限时专享" price="274" />
            </div>
            <div>
              <Recommend title="Q币限时优惠" detail="捂着限时秒杀，限时专享" price="274" />
            </div>
            <div>
              <Recommend title="Q币限时优惠" detail="捂着限时秒杀，限时专享" price="274" />
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};
