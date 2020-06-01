import React, { useMemo, useCallback } from 'react';
import withRouter from 'umi/withRouter';
import dayjs from 'dayjs';
import Layout from './Layout';
import Product from './Product';
import Button from './Button';
import styles from './index.less';

export default withRouter(({ info, mystock, isVIP, history }) => {
  const offset = useMemo(() => {
    if (info) {
      return Date.now() - info.currTimestamp;
    } else {
      return 0;
    }
  }, [info]);

  const goToProductPage = useCallback(() => {
    const { productId } = info;
    history.push({ pathname: '/topup', query: {id: productId} });
  }, [info, history]);

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
            <Button onClick={goToProductPage}>查看该商品更多折扣</Button>
          </div>
        </Layout>
      );
    }

    // 已售罄
    if (info.stock === 0) {
      if (info.nextBeginTimestamp) {
        const nextTime = dayjs(info.nextBeginTimestamp).format('HH:mm');
        return (
          <Layout
            title={info.productName}
            timeDesc="距活动开始"
            time={info.nextBeginTimestamp + offset}
          >
            <Product info={info} />
            <div className={styles['box']}>
              <div className={styles['desc']}>秒杀活动已售罄，每天早上{nextTime}开抢</div>
              <Button onClick={goToProductPage}>查看该商品更多折扣</Button>
            </div>
          </Layout>
        );
      } else {
        return (
          <Layout title={info.productName}>
            <Product info={info} />
            <div className={styles['box']}>
              <div className={styles['desc']}>秒杀活动已售罄</div>
              <Button onClick={goToProductPage}>查看该商品更多折扣</Button>
            </div>
          </Layout>
        );
      }
    }

    // vip专享
    if (!isVIP && info.onlyForVip === 'Y') {
      return (
        <Layout title={info.productName}>
          <Product info={info} />
          <div className={styles['box']}>
            <div className={styles['desc']}>本秒杀活动仅限会员参与</div>
            <Button onClick={() => { history.push('/vip') }}>马上去开通会员</Button>
          </div>
        </Layout>
      );
    }

    // 正常进行中
    return (
      <Layout title={info.productName} timeDesc="距活动结束" time={info.endTimestamp + offset}>
        <Product info={info} />
      </Layout>
    );
  }

  return null;
});
