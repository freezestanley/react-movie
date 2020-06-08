import React, { useEffect, useState, useRef, useReducer, createContext } from 'react';
import styles from './style/index.less';
import Single from '../Site/Single'
import Multi from '../Site/Multi'
import Detail from '../Site/Detail'
import { reducer, defaultState } from '../context'

export const Context = createContext(null)

const Stage = (props) => {
    let pageX = 0,pageY = 0,moveX = 0,moveY = 0,currX = 0, currY =0, current = null;
    const { site, siteEvent } = props,
        siteLine = useRef(null),
        screenRef = useRef(null),
        stageRef = useRef(null),
        innerStage = useRef(null),
        content = useRef(null),
        [zoom, setZoom] = useState(false),
        [state, dispatch] = useReducer(reducer, defaultState)
    
    useEffect(()=>{
        let rate = (document.body.clientWidth < innerStage.current.getClientRects()[0].width) ? (document.body.clientWidth / (innerStage.current.getClientRects()[0].width+50)) : 1
        screenRef.current.style.setProperty('--scale', `${rate}`);
        siteLine.current.style.setProperty('--scale', `${rate}`);
    
    }, [])

    useEffect(()=>{
        console.log('stage useEffect')
        siteEvent(state.value)
    }, [state, siteEvent])

    let limitRage = () => {
        let viewStage = screenRef.current
        let viewStageRect = viewStage.getClientRects()
        let stage = stageRef.current
        let stageRect = stage.getClientRects()
        let contentRect = content.current.getClientRects()
        let innerRect = innerStage.current.getClientRects()
        let limit = zoom ? 50 : 10
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
    let clickHandler = (e) => {
        if(zoom) return
        let rate = 1.8
        screenRef.current.style.setProperty('--scale', `${rate}`);
        siteLine.current.style.setProperty('--scale', `${rate}`);
        setZoom(true)
        let currentRect = state.currentDom.getClientRects()[0]
        currX = -(currentRect.left  - content.current.getClientRects()[0].width/2)
        screenRef.current.style.setProperty('--transformX', `${currX}px`);
        currY = -(currentRect.top - content.current.getClientRects()[0].top) + 30
        screenRef.current.style.setProperty('--transformY', `${currY}px`);
        touchEndHandler()
    }
    let touchStartHandler = (e) => {
        pageX = e.touches[0].pageX
        pageY = e.touches[0].pageY
        currX = parseInt(screenRef.current.style.getPropertyValue('--transformX')) || 0;
        currY = parseInt(screenRef.current.style.getPropertyValue('--transformY')) || 0;
    }
    let touchMoveHandler = (e) => {
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
    let touchEndHandler = (e) => {
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
                    <div className={styles.screen} alt="屏幕方向"></div>
                    <div className={styles.content} ref={content}>
                    <ul className={styles.lineLeft} ref={siteLine}>
                        {
                            site.map((ele,idx,arr) => {
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
                                site.map((ele,idx,arr) => {
                                    return (
                                        <div  key={`${idx}a`}>
                                            {ele.map((e,i,ar) => {
                                                if (e.state === 4 || e.state === 7 ) {
                                                    if (ar[i-1] && (ar[i-1].state === 4 || ar[i-1].state === 7)) {
                                                    } else {
                                                        return (<Multi  key={`${i}b`} data={e}/>)
                                                    }
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
// export default Stage
export default React.memo(Stage, (prevProps, nextProps) => false);