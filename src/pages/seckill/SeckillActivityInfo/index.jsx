import React, { useMemo } from 'react';
import Layout from './Layout';
import Product from './Product';
import Button from './Button';
import styles from './index.less';

export default ({ info, mystock }) => {
  const offset = useMemo(() => {
    if (info) {
      return Date.now() - info.currTimestamp;
    } else {
      return 0;
    }
  }, [info]);

  // 未开始
  if (info.currStatus === 2) {
    return (
      <Layout title={info.productName} timeDesc="距活动开始" time={info.beginTimestamp + offset}>
        <Product info={info} />
      </Layout>
    );
  }

  // 已结束
  if (info.currStatus === 4) {
    if (info.nextBeginTimestamp) {
      return (
        <Layout
          title={info.productName}
          timeDesc="距活动开始"
          time={info.nextBeginTimestamp + offset}
        >
          <Product info={info} />
        </Layout>
      );
    } else {
      return <div>活动已下线</div>;
    }
  }

  // 进行中
  if (info.currStatus === 1) {
    // 已达到购买次数限制
    if (mystock === 0) {
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

    // 已售罄
    if (info.stock === 0) {
      if (info.nextBeginTimestamp) {
        return (
          <Layout
            title={info.productName}
            timeDesc="距活动开始"
            time={info.nextBeginTimestamp + offset}
          >
            <Product info={info} />
            <div className={styles['box']}>
              <div className={styles['desc']}>秒杀活动已售罄，每天早上10 : 00开抢</div>
              <Button>查看该商品更多折扣</Button>
            </div>
          </Layout>
        );
      } else {
        return (
          <Layout title={info.productName}>
            <Product info={info} />
            <div className={styles['box']}>
              <div className={styles['desc']}>秒杀活动已售罄</div>
              <Button>查看该商品更多折扣</Button>
            </div>
          </Layout>
        );
      }
    }

    // 正常进行中
    return (
      <Layout title={info.productName} timeDesc="距活动结束" time={info.endTimestamp + offset}>
        <Product info={info} />
      </Layout>
    );
  }

  return null;
};
