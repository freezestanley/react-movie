import React from 'react';

import styles from './index.less';

export default () => {
  return (
    <div className={styles.homePage}>
      {new Array(50).fill(1).map((i, idx) => <p key={idx}>盎司一起测试滚动区域</p>)}
    </div>
  );
}
