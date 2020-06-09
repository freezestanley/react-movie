/**
 * Single 单人座位
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
const Single = (props) => {
    const stageContext = useContext(Context)    // 使用useContext 组件私有状态
    const domRef = useRef(null)
    const { state } = props.data
    const [type, setType] = useState(state)     // 座位状态
    const clickHandler = (e) => {
        setType(type === 1 ? 2 : 1)             // 座位状态 1 空座位 2 已选座位
        stageContext.dispatch({                 // 出发reducer dispatch CHANG_SIT
            type: "CHANG_SIT",
            payload: {
                data: props.data,               // 座位数据
                current: domRef.current         // 座位dom引用
            }
        }) 
    }
    let disabled = [0, 3, 5, 7].includes(state) // 当 0 3 5 7时不能被点击
    return (
        <div 
            ref = {domRef}
            className={SITETYPE[type]}
            onClick = {disabled ? null : clickHandler}
        ></div>
    )
}

export default Single;