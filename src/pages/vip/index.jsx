import React, { useState, useEffect } from 'react';
import Baseinfo from './Baseinfo';
import Section from './Section';
import ZeroBuy from './ZeroBuy';
import Discount from './Discount';
import Rights from './Rights';
import styles from './index.module.less';

export default () => {
  const [info, setInfo] = useState();

  useEffect(() => {
    setInfo({
      // todo: '2021-12-21',
    });
  }, []);

  return (
    <div className={styles['page']}>
      <div className={styles['baseinfo']}>{info && <Baseinfo info={info} />}</div>
      <Section title="健康权益0元购" className={styles['zerobuy']}>
        <ZeroBuy />
      </Section>
      <Section title="会员专享折扣" className={styles['discount']}>
        <Discount />
      </Section>
      <Section title="会员专享秒杀" className={styles['seckill']}>
        <div style={{ lineHeight: '50px', textAlign: 'center', border: '1px solid green' }}>
          todo
        </div>
      </Section>
      <Section title="更多特权正在上线中" className={styles['rights']}>
        <Rights />
      </Section>
      <Section title="热门推荐" className={styles['recommend']}>
        <div style={{ lineHeight: '50px', textAlign: 'center', border: '1px solid green' }}>
          todo
        </div>
      </Section>
    </div>
  );
};
