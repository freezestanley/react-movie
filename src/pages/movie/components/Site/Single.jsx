import React, { useState, useContext } from 'react';
import styles from './style/index.less';
import { Context } from '../Stage';
/**
 * 0 空走廊
 * 1 空座位
 * 2 已选座位
 * 3 损坏
 * 4 情侣座
 * 5 选中座位
 */
const SITETYPE = [
    null,
    styles.empty,
    styles.site,
    styles.fixed,
    styles.loveleft,
    styles.sited
]
const Single = (props) => {
    const stageContext = useContext(Context)
    const { state } = props.data
    const [type, setType] = useState(state)
    const clickHandler = (e) => {
        setType(type === 1 ? 2 : 1)
        stageContext.dispatch({
            type: "REDUCE_NUM",
            payload: {
                data: props.data
            }
        }) 
    }
    let disabled = [0, 3, 5, 7].includes(state)
    return (
        <div 
            className={SITETYPE[type]}
            onClick = {disabled ? null : clickHandler}
        ></div>
    )
}

export default React.memo(Single);