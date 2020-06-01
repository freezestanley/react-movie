import React, { Fragment } from 'react';
import styles from './index.module.less';

import discount from './images/discount.png';
import health from './images/health.png';
import seckill from './images/seckill.png';
import service from './images/service.png';
// const icon =
  // 'https://za-www-prd.oss-cn-hzfinance.aliyuncs.com/576bd8ad-cb4e-443a-8abc-56a0968fdd5f%E8%85%BE%E8%AE%AF%E8%A7%86%E9%A2%91.png';

const features = [
  {
    icon:discount,
    name: '会员折扣',
  },
  {
    icon:seckill,
    name: '专享秒杀',
  },
  {
    icon:health,
    name: '健康权益',
  },
  {
    icon:service,
    name: '专属客服',
  },
];

export default () => {
  return (
    <div className={styles['features']}>
      {features.map(({ icon, name }) => {
        return (
          <div key={name} className={styles['feature']}>
            <img className={styles['feature-icon']} src={icon} alt='' />
            <div className={styles['feature-name']}>{name}</div>
          </div>
        );
      })}
    </div>
  );
};
