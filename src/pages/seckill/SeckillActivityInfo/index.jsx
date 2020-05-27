import React, { useMemo } from 'react';
import Layout from './Layout';
import Product from './Product';
import Button from './Button';
import styles from './index.less';

export default ({ info, mystock }) => {
  const begun = useMemo(() => {
    return [1, 3, 4].indexOf(info.currStatus) > -1;
  }, [info]);

  const noStock = useMemo(() => info.currStatus === 3, [info]);

  const limited = useMemo(() => {
    return info.limitBuy === 'Y' && mystock === 0;
  }, [info.limitBuy, mystock]);

  const time = useMemo(() => {
    if (info.currStatus === 1) {
      return Date.now() + info.endTimestamp - info.currTimestamp;
    }

    if (info.currStatus === 2) {
      return Date.now() + info.beginTimestamp - info.currTimestamp;
    }

    if (info.currStatus === 3) {
      return Date.now() + info.nextBeginTimestamp - info.currTimestamp;
    }

    return Date.now();
  }, [info]);

  if (!begun) {
    return (
      <Layout title={info.productName} timeDesc="距活动开始" time={time}>
        <Product info={info} />
      </Layout>
    );
  }

  if (noStock) {
    return (
      <Layout title={info.productName} timeDesc="距活动开始" time={time}>
        <Product info={info} />
        <div className={styles['box']}>
          <div className={styles['desc']}>秒杀活动已售罄，每天早上10 : 00开抢</div>
          <Button>查看该商品更多折扣</Button>
        </div>
      </Layout>
    );
  }

  if (limited) {
    return (
      <Layout title={info.productName}>
        <Product info={info} />
        <div className={styles['box']}>
          <div className={styles['desc']}>您已达到今日购买上限</div>
          <Button>查看该商品更多折扣</Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout title={info.productName} timeDesc="距活动结束" time={time}>
      <Product info={info} />
    </Layout>
  );
};
