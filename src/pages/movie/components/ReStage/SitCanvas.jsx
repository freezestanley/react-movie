import React, { useEffect, useState, useRef } from 'react';
import useZoom from '@/hooks/useZoom'
import useXState from '@/hooks/useXState'
import styles from './style/index.less';

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
import Hammer from 'react-hammerjs'

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
    UNSELED: [muUnseledLeft, muUnseledRight], // 5
    SELED: [muSeledLeft, muSeledRight], // 6
    SALED: [muSaledLeft, muSaledRight] // 7
}


const WIDTH = 40
const HEIGHT = 40
let SET_WIDTH = 40
let SET_HEIGHT = 40
const SitCanvas = (props) => {
    const { data, getZoom, getSeledSit, getCanvasSize } = props
    const canvas = useRef(null)
    const ctx = useRef()
    const [seledSit, setSeledSit] = useXState([])
    const [sitData, setSitData] = useState(data)
    let isMult = true

    // const [stop] = useZoom(canvas,
    //     (e, { size }) => {
    //         console.log(size)
    //         getZoom(size)
    //     }, (e, { size }) => {
    //         SET_WIDTH = Math.floor(WIDTH * size <= 5 ? 5 : WIDTH * size)
    //         SET_HEIGHT = Math.floor(HEIGHT * size <= 5 ? 5 : HEIGHT * size)
    //         getZoom(size)
    //     }, (e, { size }) => {
    //         SET_WIDTH = Math.floor(WIDTH * size <= 5 ? 5 : WIDTH * size)
    //         SET_HEIGHT = Math.floor(HEIGHT * size <= 5 ? 5 : HEIGHT * size)
    //         getZoom(size)
    //     })

    useEffect(() => {
        canvas.current.addEventListener('click', clickHandler, {
            passive: false
        })
    }, [])

    // useEffect(() => {
    //     setSitData([...data])
    // }, [data])

    useEffect(() => {
        ctx.current = canvas.current.getContext('2d')
        canvas.current.width = (SET_WIDTH * data[0].length)
        canvas.current.height = (SET_HEIGHT * data.length)
        canvas.current.style.width = `${canvas.current.width / 2}px`
        canvas.current.style.height = `${canvas.current.height / 2}px`
        sitData.map((coloum, index, arr) => {
            coloum.map((ele, idx, ar) => {
                let img = null
                if (ele.state === 0) {
                    img = SINGLE.EMPTY
                } else if (ele.state === 1) {
                    img = SINGLE.UNSELED
                } else if (ele.state === 2) {
                    img = SINGLE.SELED
                } else if (ele.state === 3) {
                    img = SINGLE.FIX
                } else if (ele.state === 4) {
                    img = SINGLE.SALED
                } else if (ele.state === 5) {
                    if (isMult) {
                        img = MULT.UNSELED[0]
                        isMult = false
                        ele.position = 0
                    } else {
                        img = MULT.UNSELED[1]
                        isMult = true
                        ele.position = 1
                    }
                } else if (ele.state === 6) {
                    if (isMult) {
                        img = MULT.SELED[0]
                        isMult = false
                        ele.position = 0
                    } else {
                        img = MULT.SELED[1]
                        isMult = true
                        ele.position = 1
                    }
                } else if (ele.state === 7) {
                    if (isMult) {
                        img = MULT.SALED[0]
                        isMult = false
                        ele.position = 0
                    } else {
                        img = MULT.SALED[1]
                        isMult = true
                        ele.position = 1
                    }
                }
                getCanvasSize({ width: canvas.current.width / 2, height: canvas.current.height / 2 })
                console.log(canvas.current.height / 2, canvas.current.width / 2)
                ctx.current.drawImage(img, idx * SET_WIDTH, index * SET_HEIGHT, SET_WIDTH, SET_HEIGHT);
            })
        })
    }, [sitData, SET_WIDTH, SET_HEIGHT])

    const clickHandler = (e) => {
        e.preventDefault()
        let offset = canvas.current.getBoundingClientRect()
        let pageX = Math.floor((e.pageX - offset.left) / (SET_WIDTH / 2))
        let pageY = Math.floor((e.pageY - offset.top) / (SET_HEIGHT / 2))
        let currentSit = sitData[pageY][pageX]
        if (currentSit) {
            let idx = seledSit.findIndex(ele => currentSit.id === ele.id) // 判断提交的座位是否已被选中
            let img = null
            if (idx >= 0) {
                seledSit.splice(idx, 1)  // 选中删除
                if (currentSit.state === 2) {
                    currentSit.state = 1
                } else if (currentSit.state === 6) {
                    currentSit.state = 5
                    if (currentSit.position === 0) {
                        sitData[pageY][pageX + 1].state = 5
                    } else {
                        sitData[pageY][pageX - 1].state = 5
                    }
                }
            } else {
                seledSit.push({ ...currentSit }) // 没选中则加入选中array
                if (currentSit.state === 1) {
                    currentSit.state = 2
                } else if (currentSit.state === 5) {
                    currentSit.state = 6
                    if (currentSit.position === 0) {
                        sitData[pageY][pageX + 1].state = 6
                    } else {
                        sitData[pageY][pageX - 1].state = 6
                    }
                }
            }
            setSeledSit([...seledSit], () => {
                debugger
                getSeledSit(seledSit, sitData)
            })
            setSitData([...sitData])
        }
    }
    let pinout = (e) => {
        let scale = (parseFloat(canvas.current.style.getPropertyValue('--scale')) || 1)
        if (scale < 1.8) {
            scale += 0.1;
            canvas.current.style.setProperty('--scale', `${scale}`)
            SET_WIDTH = Math.floor(WIDTH * scale <= 5 ? 5 : WIDTH * scale)
            SET_HEIGHT = Math.floor(HEIGHT * scale <= 5 ? 5 : HEIGHT * scale)
            getZoom(scale)
        }
    }
    let pinin = (e) => {
        let scale = (parseFloat(canvas.current.style.getPropertyValue('--scale')) || 1)
        if (scale > 1) {
            scale -= 0.1
            canvas.current.style.setProperty('--scale', `${scale}`)
            SET_WIDTH = Math.floor(WIDTH * scale <= 5 ? 5 : WIDTH * scale)
            SET_HEIGHT = Math.floor(HEIGHT * scale <= 5 ? 5 : HEIGHT * scale)
            getZoom(scale)
        }
    }
    return (
        <Hammer
            onPinchIn={pinin}
            onPinchOut={pinout}
            options=
            {{
                recognizers: {
                    pinch: { enable: true }
                }
            }}
        >
            <ul>
                <canvas ref={canvas} id='siteCanvas' />
            </ul >
        </Hammer >
    )
}

export default SitCanvas