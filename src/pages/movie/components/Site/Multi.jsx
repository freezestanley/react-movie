import React, { useState, useContext } from 'react';
import styles from './style/index.less';
import { Context } from '../Stage';
/**
 * 0 空走廊
 * 1 空座位
 * 2 已选座位
 * 3 已售
 * 4 情侣座
 * 5 已选情侣座
 * 6 已售情侣座
 * 7 损坏
 */
const SITETYPE = [
    null,
    styles.empty,
    styles.site,
    styles.sited,
    null,
    null,
    null,
    styles.fixed,
]
const Multi = (props) => {
    const stageContext = useContext(Context)
    const { state } = props.data
    const [type, setType] = useState(state)
    const clickHandler = (e) => {
        setType(type === 4 ? 6 : 4)
        stageContext.dispatch({
            type: "REDUCE_NUM",
            payload: {
                data: props.data
            }
        })  
    }
    let disabled = [0, 3, 5, 7].includes(state)
    return (
        <>
            <div 
                className={type === 4 ? styles.loveleft : type === 7 ? styles.unlovedleft : styles.lovedleft}
                onClick = {disabled ? null : clickHandler}
            ></div>
            <div 
                className={type === 4 ? styles.loveright : type === 7 ? styles.unlovedright :styles.lovedright}
                onClick = {disabled ? null : clickHandler}
            ></div>
        </>
    )
}

export default React.memo(Multi, (prevProps, nextProps) => false);