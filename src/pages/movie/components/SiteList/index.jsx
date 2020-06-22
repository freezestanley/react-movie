
import React from 'react';
import styles from './style/index.less';

const SiteList = (props) => {
    const { data } = props
    return (
        <div className={styles.choose} >
                <div className={styles.chooseTitle}>选中的座位:</div>
                <div className={styles.choosePoint}>
                    {
                    data.map((e, idx, arr) => {
                        return (<div key={`${idx}a`}  className={styles.point}>
                            {e.info}
                        </div>)
                    })
                    }
                </div>
        </div>
    )
}
export default SiteList