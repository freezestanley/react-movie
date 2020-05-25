import React from 'react'
import styles from './index.less'


export default({info})=>{
return <div className={styles.CardPackageHead}>
  <div className={styles.Title}>
    {info.title}
  </div>
  <div className={styles.Content}>
    {info.content}
  </div>
</div>
}
