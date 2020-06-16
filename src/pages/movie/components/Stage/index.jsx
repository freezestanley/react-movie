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
import useZoom from '@/hooks/useZoom'

export const Context = createContext(null) // 私有state

let pageX = 0,pageY = 0
const Stage = (props) => {
    let moveX = 0,moveY = 0,currX = 0, currY =0;
    let time = null
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
    
    // useEffect(()=>{ // 渲染后屏幕缩放
    //     let rate = (content.current.getClientRects()[0].width < innerStage.current.getClientRects()[0].width) ? (content.current.getClientRects()[0].width / (innerStage.current.getClientRects()[0].width+50)) : 1
    //     screenRef.current.style.setProperty('--scale', `${rate}`);
    //     siteLine.current.style.setProperty('--scale', `${rate}`);
    //     stageRef.current.addEventListener('touchmove', (e)=>{
    //         e.preventDefault()
    //     }, {
    //         passive: false
    //     })
    // }, [])

    useEffect(()=>{
        siteEvent(state.value)  // 获取选中的座位信息
        if (isFollow) {
            // screenFollow()      // 第一次放大时的跟踪
        }
        setTouch(true) 
        window.clearTimeout(time)         // preview 显示
        time = setTimeout(()=>{
            setTouch(false)     // 4秒后preview 隐藏
        }, 4000)
    }, [state, siteEvent])



    const [ size, setSize] = useState(1)
    const [ X, setX ] = useState(0)
    const [ Y, setY ] = useState(0)
    const [ bb, setBb] = useState(1)
    
    useZoom(content,  (e, d) => {}, (e, d) => {
        setBb(d.size)
        console.log(d)
    }, (e, d) => {
        setBb(d.size)
        console.log(d)
    })

    

    useEffect(()=>{ // 渲染后屏幕缩放
        let rate = (content.current.getClientRects()[0].width < innerStage.current.getClientRects()[0].width) ? (content.current.getClientRects()[0].width / (innerStage.current.getClientRects()[0].width+50)) : 1
        setSize(rate)
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

    
    let limitRage = () => {    // 获取容器拖动的最大区域
        let contentRect = content.current.getClientRects()
        let innerRect = innerStage.current.getClientRects()
        let limit = 80
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
        // setSize(d.size)
        // setX(d.x)
        // setY(d.y)
        setSize(d.size)
        siteLine.current.style.setProperty('--transformY', `${d.y}px`);
    }
    const moveHandler = (e, d) => {
        // setSize(d.size)
        // setX(d.x)
        // debugger
        // setTimeout(() => setY(d.y), 10)
        console.log('move:' + d.y)
        // setY(d.y)
        setSize(d.size)
        siteLine.current.style.setProperty('--transformY', `${d.y}px`);
    }
    const endHandler = (e, d) => {
        // setSize(d.size)
        // setX(d.x)
        // setTimeout(() => setY(d.y), 10)
        // console.log('end:' + d.y)
        // setY(d.y)
        setSize(d.size)
        siteLine.current.style.setProperty('--transformY', `${d.y}px`);
    }

    const [stop] = useDragger(screenRef, limitRage, [size, X, Y], false, startHandler, moveHandler, endHandler)

    useTransform(siteLine, [size, 0, Y])
    
    let clickHandler = (e) => { // 点击后座位放大
        if(zoom) return
        let rate = 1.4
        setSize(rate)
        setZoom(true)
    }




    // let screenFollow = () => {  // 获取当前选中的座位并在舞台上现实
    //     if( state.currentDom && state.currentDom.dom && state.currentDom.dom.getClientRects()[0]) {
    //         let currentRect = state.currentDom.dom.getClientRects()[0]
    //         currX = -(currentRect.left  - content.current.getClientRects()[0].width/2)
    //         screenRef.current.style.setProperty('--transformX', `${currX}px`);
    //         currY = -(currentRect.top - content.current.getClientRects()[0].top) + 30
    //         screenRef.current.style.setProperty('--transformY', `${currY}px`);
    //         touchEndHandler()   // 防止在舞台上坐标 超过最大的可移动范围
    //         setFollow(false)
    //     }
    // }
    // let clickHandler = (e) => { // 点击后座位放大
    //     debugger
    //     if(zoom) return
    //     let rate = 1.4
    //     screenRef.current.style.setProperty('--scale', `${rate}`);
    //     siteLine.current.style.setProperty('--scale', `${rate}`);
    //     setZoom(true)
    // }
    // let touchStartHandler = (e) => { // 拖动开始
    //     pageX = e.touches[0].pageX
    //     pageY = e.touches[0].pageY
    //     currX = parseInt(screenRef.current.style.getPropertyValue('--transformX')) || 0;
    //     currY = parseInt(screenRef.current.style.getPropertyValue('--transformY')) || 0;
    // }
    // let touchMoveHandler = (e) => { // 拖动移动
    //     e.preventDefault()
    //     currX = parseInt(screenRef.current.style.getPropertyValue('--transformX')) || 0;
    //     currY = parseInt(screenRef.current.style.getPropertyValue('--transformY')) || 0;
    //     moveX = e.touches[0].pageX - pageX
    //     moveY = e.touches[0].pageY - pageY
    //     pageX = e.touches[0].pageX
    //     pageY = e.touches[0].pageY
    //     currX += moveX;
    //     currY += moveY;
    //     screenRef.current.style.setProperty('--transformX', `${currX}px`);
    //     screenRef.current.style.setProperty('--transformY', `${currY}px`);
    //     siteLine.current.style.setProperty('--transformY', `${currY}px`);

    // }
    // let touchEndHandler = (e) => { // touch 抬手
    //     let rage = limitRage()
    //     currX = parseInt(screenRef.current.style.getPropertyValue('--transformX')) || 0;
    //     currY = parseInt(screenRef.current.style.getPropertyValue('--transformY')) || 0;
    //     currX = currX >= rage.maxX ? rage.maxX : currX < rage.minX ? rage.minX : currX
    //     currY = currY >= rage.maxY ? rage.maxY : currY < rage.minY ? rage.minY : currY
    //     screenRef.current.style.setProperty('--transformX', `${currX}px`);
    //     screenRef.current.style.setProperty('--transformY', `${currY}px`);
    //     siteLine.current.style.setProperty('--transformY', `${currY}px`);
    // }
   

    return (
            <div className={styles.stage} ref={stageRef}>
                <div>{bb} || {size}</div>
                <Detail />
                <div className={styles.stageBox}>
                    <Preview data={sitFilter} choose={state} show={isTouch} />
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
                    <div className={styles.viewStage} ref={screenRef}
                        onClick={(e)=>clickHandler(e)}
                    >
                        <Context.Provider value={{state, dispatch: dispatch}}>
                            <div ref = {innerStage}
                            className={styles.siteTable}>
                            {
                                sitFilter.map((ele,idx,arr) => {
                                    return (
                                        <div  key={`${idx}${Math.random()}`}>
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