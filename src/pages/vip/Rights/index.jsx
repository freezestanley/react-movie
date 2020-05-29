import React from 'react';
import styles from './index.module.less';

const icon =
  'https://za-www-prd.oss-cn-hzfinance.aliyuncs.com/576bd8ad-cb4e-443a-8abc-56a0968fdd5f%E8%85%BE%E8%AE%AF%E8%A7%86%E9%A2%91.png';

const rights = [
  {
    icon,
    name: '会员日',
  },
  {
    icon,
    name: '0元购',
  },
  {
    icon,
    name: '航空权益',
  },
  {
    icon,
    name: '酒店权益',
  },
];

export default () => {
  return (
    <div className={styles['right-list']}>
      {rights.map(({ icon, name }) => {
        return (
          <div className={styles['right-item']}>
            <img className={styles['icon']} src={icon} />
            <div className={styles['name']}>{name}</div>
          </div>
        );
      })}
    </div>
  );
};
