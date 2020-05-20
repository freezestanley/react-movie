import React from 'react';
import styles from './index.less'
export default ({ title, detail, price, icon, onClick }) => {
  const handleClick = () => {
    onClick && onClick();
  }
  return (
    <div className={styles.BeeBuy} onClick={handleClick}>
      <div className={styles.BeeBuy_up} >
        <p>{title}</p>
        <p>{detail}</p>
        <div>
          ¥{price} <del>¥499</del>
        </div>
      </div>
      <div className={styles.BeeBuy_icon}> <img src={icon} alt="" /></div>
      <div className={styles.BeeBuy_down}>
        <p>剩余30件</p>
        <div className={styles.progress_bar}>
          <div className={styles.progress}> </div>
        </div>
      </div>
    </div>
  )
}