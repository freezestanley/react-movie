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

export const Context = createContext(null) // 私有state

let pageX = 0,pageY = 0
const Stage = (props) => {
    let moveX = 0,moveY = 0,currX = 0, currY =0;
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
    
    useEffect(()=>{ // 渲染后屏幕缩放
        let rate = (document.body.clientWidth < innerStage.current.getClientRects()[0].width) ? (document.body.clientWidth / (innerStage.current.getClientRects()[0].width+50)) : 1
        screenRef.current.style.setProperty('--scale', `${rate}`);
        siteLine.current.style.setProperty('--scale', `${rate}`);
    }, [])

    useEffect(()=>{
        siteEvent(state.value)  // 获取选中的座位信息
        if (isFollow) {
            screenFollow()      // 第一次放大时的跟踪
        }
        setTouch(true)          // preview 显示
        setTimeout(()=>{
            setTouch(false)     // 4秒后preview 隐藏
        }, 4000)
    }, [state, siteEvent])

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

    
    let limitRage = () => {    // 获取容器拖动的最大区域
        let contentRect = content.current.getClientRects()
        let innerRect = innerStage.current.getClientRects()
        let limit = zoom ? 50 : 10  // 放大时候边距50 缩小时为10
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
    let screenFollow = () => {  // 获取当前选中的座位并在舞台上现实
        if( state.currentDom && state.currentDom.dom && state.currentDom.dom.getClientRects()[0]) {
            let currentRect = state.currentDom.dom.getClientRects()[0]
            currX = -(currentRect.left  - content.current.getClientRects()[0].width/2)
            screenRef.current.style.setProperty('--transformX', `${currX}px`);
            currY = -(currentRect.top - content.current.getClientRects()[0].top) + 30
            screenRef.current.style.setProperty('--transformY', `${currY}px`);
            touchEndHandler()   // 防止在舞台上坐标 超过最大的可移动范围
            setFollow(false)
        }
    }
    let clickHandler = (e) => { // 点击后座位放大
        if(zoom) return
        let rate = 1.8
        screenRef.current.style.setProperty('--scale', `${rate}`);
        siteLine.current.style.setProperty('--scale', `${rate}`);
        setZoom(true)
    }
    let touchStartHandler = (e) => { // 拖动开始
        pageX = e.touches[0].pageX
        pageY = e.touches[0].pageY
        currX = parseInt(screenRef.current.style.getPropertyValue('--transformX')) || 0;
        currY = parseInt(screenRef.current.style.getPropertyValue('--transformY')) || 0;
        
    }
    let touchMoveHandler = (e) => { // 拖动移动
        currX = parseInt(screenRef.current.style.getPropertyValue('--transformX')) || 0;
        currY = parseInt(screenRef.current.style.getPropertyValue('--transformY')) || 0;
        moveX = e.touches[0].pageX - pageX
        moveY = e.touches[0].pageY - pageY
        pageX = e.touches[0].pageX
        pageY = e.touches[0].pageY
        currX += moveX;
        currY += moveY;
        screenRef.current.style.setProperty('--transformX', `${currX}px`);
        screenRef.current.style.setProperty('--transformY', `${currY}px`);
        siteLine.current.style.setProperty('--transformY', `${currY}px`);

    }
    let touchEndHandler = (e) => { // touch 抬手
        let rage = limitRage()
        currX = parseInt(screenRef.current.style.getPropertyValue('--transformX')) || 0;
        currY = parseInt(screenRef.current.style.getPropertyValue('--transformY')) || 0;
        currX = currX >= rage.maxX ? rage.maxX : currX < rage.minX ? rage.minX : currX
        currY = currY >= rage.maxY ? rage.maxY : currY < rage.minY ? rage.minY : currY
        screenRef.current.style.setProperty('--transformX', `${currX}px`);
        screenRef.current.style.setProperty('--transformY', `${currY}px`);
        siteLine.current.style.setProperty('--transformY', `${currY}px`);
    }
   

    return (
            <div className={styles.stage} ref={stageRef}>
                <Detail />
                <div className={styles.stageBox}>
                    <Preview data={sitFilter} choose={state} show={isTouch} />
                    <div className={styles.screen} alt="屏幕方向"></div>
                    <div className={styles.content} ref={content}>
                    <ul className={styles.lineLeft} ref={siteLine}>
                        {
                            sitFilter.map((ele,idx,arr) => {
                                return (
                                    <li key={`${idx}d`}>{idx}</li>
                                )
                            })
                        }
                    </ul>
                    <div className={styles.viewStage} ref={screenRef}
                        onTouchStart={touchStartHandler}
                        onTouchMove={touchMoveHandler}
                        onTouchEnd={touchEndHandler}
                        onClick={(e)=>clickHandler(e)}
                    >
                        <Context.Provider value={{state, dispatch: dispatch}}>
                            <div ref = {innerStage}
                            className={styles.siteTable}>
                            {
                                sitFilter.map((ele,idx,arr) => {
                                    return (
                                        <div  key={`${idx}a`}>
                                            {ele.map((e,i,ar) => {
                                                if (e.state === 4 || e.state === 7 ) {
                                                    return (<Multi  key={`${i}b`} data={e}/>)
                                                } else {
                                                    return (<Single key={`${i}b`} data={e}/>)
                                                }

                                            })}
                                        </div>
                                    )
                                })
                            }
                            </div>
                        </Context.Provider>
                    </div>
                </div>
                </div>
            </div>
    )
}
export default Stage