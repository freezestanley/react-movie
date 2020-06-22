import React from 'react';
import styles from './index.module.less';

export default function(props) {
  const { text, extraStyle } = props;
  return (<div className={styles.loading} style={extraStyle || {}}>
    <div className={styles.loadingText}>{text}</div>
  </div>)
}