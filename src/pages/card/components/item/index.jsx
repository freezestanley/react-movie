import React, { useEffect, useReducer } from 'react'
import styles from './index.less'

const Item = (props) => {
    const {address, store} = props
    return (
        <div className={styles.item}>
            {
                store.map((ele, idx, arr) => (
                    <div className={styles.box}>
                        <div>{ele}</div>
                        <div>{address[idx]}</div>
                    </div>
                ))
            }
            
        </div>
    )
}
export default Item