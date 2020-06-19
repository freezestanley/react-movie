/**
 * Stage 座位舞台
 * props:
 *  site:  座位数据
 *  siteEvent: 将选中的座位给到父组件
 * methods:
 *  limitRage 获取最大可拖动范围
 *  sitFilter 座位数据过滤
 *  screenFollow 放大后屏幕跟随
 *  clickHandler 座位点击后放大
 *  touchStartHandler 拖动开始
 *  touchMoveHandler 拖动中
 *  touchEndHandler 拖动结束
 */
import React, { useEffect, useState, useRef, useReducer, createContext, useMemo } from 'react';
import styles from './style/index.less';
import Single from '../Site/Single'
import Multi from '../Site/Multi'
import Detail from '../Site/Detail'
import Preview from '../Preview'
import { reducer, defaultState } from '../context'
import useDragger from '@/hooks/useDragger'
import useTransform from '@/hooks/useTransform'
import SitCanvas from './SitCanvas'

export const Context = createContext(null) // 私有state
let time = null
const Stage = (props) => {
    
    const { site, siteEvent } = props,
        siteLine = useRef(null),    // 侧边座位排数
        screenRef = useRef(null),   
        stageRef = useRef(null),    // 舞台引用
        innerStage = useRef(null),  // 座位引用
        content = useRef(null),     // 容器引用
        [zoom, setZoom] = useState(false),
        [state, dispatch] = useReducer(reducer, defaultState), // stage 私有reducer
        [isTouch, setTouch] = useState(false),  // 是否触摸
        [isFollow, setFollow] = useState(true)  // 点击放大时的跟随

        
    const [ size, setSize] = useState(1)
    const [ X, setX ] = useState(0)
    const [ Y, setY ] = useState(0)
    
    useEffect(()=>{
        siteEvent(state.value)  // 获取选中的座位信息
    }, [state, siteEvent])

    useEffect(()=>{ // 渲染后屏幕缩放
        let rateW = (content.current.getClientRects()[0].width < innerStage.current.getClientRects()[0].width) ? (content.current.getClientRects()[0].width / (innerStage.current.getClientRects()[0].width+100)) : 1
        let rateH = (content.current.getClientRects()[0].height < innerStage.current.getClientRects()[0].height) ? (content.current.getClientRects()[0].height / (innerStage.current.getClientRects()[0].height+100)) : 1
        let rate = rateW <= rateH ? rateW : rateH
        stageRef.current.addEventListener('touchmove', (e)=>{
            e.preventDefault()
        }, {
            passive: false
        })
    }, [])

    let sitFilter = useMemo(() => { // data数据过滤 过滤 情人座位。连续4，4 =》 4
        let state = false
        let result = []
        site.map((element, idx, arr) => {
            let row = []
            element.map((ele,i, ar) => {
                if (state && ele.state === 4) {
                    state = false
                } else {
                    state = true
                    row.push(ele)
                }
            })
            result.push(row)
        })
        return result
    }, [site])

    
    let limitRage = (content, substance, limit = 80) => {    // 获取容器拖动的最大区域
        let contentRect = content.current.getClientRects()
        let innerRect = substance.current.getClientRects()
        return {
            width: innerRect[0].width + limit * 2,
            height: innerRect[0].height + limit * 2,
            maxY: 0,
            minY: ((innerRect[0].height + limit) >= contentRect[0].height) ? 
                    contentRect[0].height - (innerRect[0].height + limit) : 0,
            maxX: ((innerRect[0].width + limit * 2) >= contentRect[0].width) ?
                    (innerRect[0].width + limit * 2) / 2 - contentRect[0].width / 2 : 0,
            minX: ((innerRect[0].width + limit * 2) >= contentRect[0].width) ?
                    contentRect[0].width / 2 - (innerRect[0].width + limit * 2) / 2 : 0,
        }
    }
    
    const startHandler = (e, d) => {
        siteLine.current.style.setProperty('--transformY', `${d.y}px`);
        setTouch(true) 
    }
    const moveHandler = (e, d) => {
        siteLine.current.style.setProperty('--transformY', `${d.y}px`);
    }
    const endHandler = (e, d) => {
        // setX(d.x)
        // setY(d.y)
        siteLine.current.style.setProperty('--transformY', `${d.y}px`);
        window.clearTimeout(time)         // preview 显示
        time = setTimeout(()=>{
            setTouch(false)     // 4秒后preview 隐藏
        }, 2000)
    }

    const [stop] = useDragger(screenRef, () => limitRage(content, innerStage), [1, X, Y], {zoom: false, moveLimit: true}, startHandler, moveHandler, endHandler)

    
    const getCanvasZoom = (size) => {
        siteLine.current.style.setProperty('--scale', `${size}`);
        setSize(size)
    }

    return (
            <div className={styles.stage} ref={stageRef}>
                <Detail />
                <div className={styles.stageBox}>
                    {/* <Preview data={sitFilter} choose={state} show={isTouch} /> */}
                    <div className={styles.screen} alt="屏幕方向"></div>
                    <div className={styles.content} ref={content}>
                    <ul className={styles.lineLeft} ref={siteLine}>
                        {
                            sitFilter.map((ele,idx,arr) => {
                                return (
                                    <li key={`${idx}${Math.random()}`}>{idx}</li>
                                )
                            })
                        }
                    </ul>
                    <div className={styles.viewStage} ref={screenRef} >
                        <Context.Provider value={{state, dispatch: dispatch}}>
                            <div ref = {innerStage}
                                className={styles.siteTable}>
                                    <SitCanvas data={site} getZoom = {getCanvasZoom}/>
                            </div>
                        </Context.Provider>
                    </div>
                </div>
                </div>
            </div>
    )
}
export default Stage