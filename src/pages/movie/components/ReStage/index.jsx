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
import Detail from '../Site/Detail'
import Preview from '../Preview'
import { reducer, defaultState } from '../context'
import useDragger from '@/hooks/useDragger'
import useXState from '@/hooks/useXState'
import SitCanvas from './SitCanvas'

import SeaCanvas from '@/pages/movie/components/Preview/seaCanvas'



import singleSite from './images/1.png'
import singleEmptySite from './images/2.png'
import fixSingleSite from './images/3.png'
import saledSite from './images/11.png'

import muliUnseledLeft from './images/4.png'
import muliUnseledRight from './images/5.png'

import muliSeledLeft from './images/6.png'
import muliSeledRight from './images/7.png'

import muliSaledLeft from './images/12.png'
import muliSaledRight from './images/13.png'

const singleSeled = new Image()
singleSeled.src = singleSite
const singleUnSeled = new Image()
singleUnSeled.src = singleEmptySite
const singlefixSite = new Image()
singlefixSite.src = fixSingleSite
const singleSaled = new Image()
singleSaled.src = saledSite

const muUnseledLeft = new Image()
muUnseledLeft.src = muliUnseledLeft
const muUnseledRight = new Image()
muUnseledRight.src = muliUnseledRight

const muSeledLeft = new Image()
muSeledLeft.src = muliSeledLeft
const muSeledRight = new Image()
muSeledRight.src = muliSeledRight

const muSaledLeft = new Image()
muSaledLeft.src = muliSaledLeft
const muSaledRight = new Image()
muSaledRight.src = muliSaledRight

const SINGLE = {
    EMPTY: new Image(),     // 0
    UNSELED: singleUnSeled, // 1
    SELED: singleSeled, // 2
    FIX: singlefixSite, // 3
    SALED: singleSaled // 4
}
const MULT = {
    UNSELED: [ muUnseledLeft, muUnseledRight], // 5
    SELED: [muSeledLeft, muSeledRight], // 6
    SALED: [muSaledLeft, muSaledRight] // 7
}




export const Context = createContext(null) // 私有state
let time = null
const Stage = (props) => {
    
    const { site, siteEvent } = props,
        siteLine = useRef(null),    // 侧边座位排数
        screenRef = useRef(null),   
        stageRef = useRef(null),    // 舞台引用
        innerStage = useRef(null),  // 座位引用
        content = useRef(null),     // 容器引用
        [state, dispatch] = useReducer(reducer, defaultState), // stage 私有reducer
        [isTouch, setTouch] = useXState(false),  // 是否触摸
        [reSitData, setReSiteData] = useState([...site])
        
    const [ size, setSize] = useState(1)
    const [move, setMove] = useState()
    
    useEffect(()=>{
        siteEvent(state.value)  // 获取选中的座位信息
    }, [state, siteEvent])

    useEffect(()=>{ // 渲染后屏幕缩放
        stageRef.current.addEventListener('touchmove', (e)=>{
            e.preventDefault()
        }, {
            passive: false
        })
    }, [])

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
    }
    const showPreview = () => {
        setTouch(true) 
        window.clearTimeout(time)         // preview 显示
            time = setTimeout(()=>{
                setTouch(false)     // 4秒后preview 隐藏
            }, 1000)
    }
    const moveHandler = (e, d) => {
        siteLine.current.style.setProperty('--transformY', `${d.y}px`);
        showPreview()
        setMove({...d})
    }
    const endHandler = (e, d) => {
        siteLine.current.style.setProperty('--transformY', `${d.y}px`);
        
    }

    const [stop] = useDragger(screenRef, () => limitRage(content, innerStage), [1, 0, 0], {zoom: false, moveLimit: true}, startHandler, moveHandler, endHandler)

    
    const getCanvasZoom = (scale) => {
        siteLine.current.style.setProperty('--scale', `${scale}`);
        setSize(scale)
    }

    const getSeledSit = (sit, sitdata) => {
        siteEvent(sit)
        setReSiteData([...sitdata])
        showPreview()
    }
    const clickHandler = (e) => {
        showPreview()
    }
   
    return (
            <div className={styles.stage} ref={stageRef}>
                <Detail />
                <div className={styles.stageBox}>

                    <Preview 
                        data = {reSitData}
                        show = {isTouch}
                        Click = {clickHandler} 
                        move = {move}
                    />

                    <div className={styles.screen} alt="屏幕方向"></div>
                    <div className={styles.content} ref={content}>
                    <ul className={styles.lineLeft} ref={siteLine}>
                        {
                            reSitData.map((ele,idx,arr) => {
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
                           
                                    <SitCanvas 
                                        data={site} 
                                        getZoom = {getCanvasZoom} 
                                        getSeledSit = {getSeledSit}
                                    />
                            </div>
                        </Context.Provider>
                    </div>
                </div>
                </div>
            </div>
    )
}
export default Stage