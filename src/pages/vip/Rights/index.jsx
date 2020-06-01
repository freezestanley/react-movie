import React from 'react';
import styles from './index.module.less';

import fly from './images/fly.png'
import hotel from './images/hotel.png'
import memberday from './images/memberday.png'
import zerobuy from './images/zerobuy.png'



const rights = [
  {
    icon:memberday,
    name: '会员日',
  },
  {
    icon:zerobuy,
    name: '0元购',
  },
  {
    icon:fly,
    name: '航空权益',
  },
  {
    icon:hotel,
    name: '酒店权益',
  },
];

export default () => {
  return (
    <div className={styles['right-list']}>
      {rights.map(({ icon, name }, idx) => {
        return (
          <div className={styles['right-item']}>
            <img className={styles['icon']} src={icon} alt=''/>
            <div className={styles['name']}>{name}</div>
          </div>
        );
      })}
    </div>
  );
};
