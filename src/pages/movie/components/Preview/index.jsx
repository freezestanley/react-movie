import React from 'react';

import styles from './style/index.less';

export default function Preview({ site = [], choose = [] }) {
  const chooseId = choose.map(i => i.id);
  console.log('[7] index.jsx: ', chooseId);
  return (
    <div className={styles.preview}>
      <div className={styles.sitebox}>
        {site.map((item, index) => {
          return (
            <div key={index} className={styles.row}>
              {item.map((i, idx) => {
                console.log('[15] index.jsx: ', i.id);
                return <div className={`${styles.item} ${chooseId.includes(i.id) ? styles.checked : ''}`} key={item.id}></div>
              })}
            </div>
          )
        })}
      </div>
    </div>
  )
}