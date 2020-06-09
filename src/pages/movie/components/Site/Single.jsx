import React, { useState, useContext, useRef } from 'react';
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
    styles.fixed,
    styles.loveleft,
    styles.sited
]
const Single = (props) => {
    const stageContext = useContext(Context)
    const domRef = useRef(null)
    const { state } = props.data
    const [type, setType] = useState(state)
    const clickHandler = (e) => {
        setType(type === 1 ? 2 : 1)
        stageContext.dispatch({
            type: "CHANG_SIT",
            payload: {
                data: props.data,
                current: domRef.current
            }
        }) 
    }
    let disabled = [0, 3, 5, 7].includes(state)
    return (
        <div 
            ref = {domRef}
            className={SITETYPE[type]}
            onClick = {disabled ? null : clickHandler}
        ></div>
    )
}

export default React.memo(Single, (prevProps, nextProps)=>false);