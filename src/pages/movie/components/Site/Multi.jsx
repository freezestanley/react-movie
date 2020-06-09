/**
 * Multi 双人情侣座位
 * props:
 *  data: 获取座位信息
 */
import React, { useState, useContext, useRef } from 'react';
import styles from './style/index.less';
import { Context } from '../Stage';

const SITETYPE = [
    null,           // 0 空走廊
    styles.empty,   // 1 空座位
    styles.site,    // 2 已选座位
    styles.sited,   // 3 已售
    null,           // 4 情侣座
    null,           // 5 已选情侣座
    null,           // 6 已售情侣座
    styles.fixed,   // 7 损坏
]
const Multi = (props) => {
    const stageContext = useContext(Context) // 使用useContext 组件私有状态
    const { state } = props.data
    const domRef = useRef(null)
    const [type, setType] = useState(state)  // 座位状态 
    const clickHandler = (e) => {
        setType(type === 4 ? 6 : 4)          // 情侣座状态 4 6
        stageContext.dispatch({              // 提交reducer
            type: "CHANG_SIT",               // 出发reducer dispatch CHANG_SIT
            payload: {
                data: props.data,
                current: domRef.current
            }
        })  
    }
    let disabled = [0, 3, 5, 7].includes(state) // 当 0 3 5 7时不能被选择
    return (
        <>
            <div 
                ref = {domRef}
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

export default Multi