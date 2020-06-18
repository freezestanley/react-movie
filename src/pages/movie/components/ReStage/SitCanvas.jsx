import React, { useEffect, useState, useRef, useReducer, createContext, useMemo } from 'react';
import useZoom from '@/hooks/useZoom'
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



let SET_WIDTH = 40
let SET_HEIGHT = 40
const SitCanvas = (props) => {
    const {data} = props
    const canvas = useRef(null)
    const ctx = useRef()
    const [seledSit, setSeledSit] = useState([])
    let isMult = true
    const [aa, setAa] = useState()
    // const [WIDTH, Set] = useState(SET_WIDTH)

    const [stop] = useZoom(canvas, 
    (e, {size}) => {
        debugger
        console.log(size)
        setAa(size)
    },(e, {size}) => {
        debugger
        console.log(size)
        setAa(size)
    },(e, {size}) => {
        debugger
        console.log(size)
        setAa(size)
    })

    useEffect(() => {
        canvas.current.addEventListener('click', clickHandler, {
            passive: false
        })
    }, [])
    useEffect(() => {
        debugger
        ctx.current = canvas.current.getContext('2d')
        canvas.current.width = (SET_WIDTH * data[0].length)
        canvas.current.height = (SET_HEIGHT * data.length)
        canvas.current.style.width = `${canvas.current.width / 2}px`
        canvas.current.style.height = `${canvas.current.height / 2}px`
        data.map((coloum, index, arr)=> {
            coloum.map((ele, idx, ar) =>{
                debugger
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
                    } else {
                        img = MULT.UNSELED[1]
                        isMult = true
                    }
                } else if (ele.state === 6) {
                    if (isMult) {
                        img = MULT.SELED[0]
                        isMult = false
                    } else {
                        img = MULT.SELED[1]
                        isMult = true
                    }
                } else if (ele.state === 7) {
                    if (isMult) {
                        img = MULT.SALED[0]
                            isMult = false
                    } else {
                        img = MULT.SALED[1]
                        isMult = true
                    }
                }

                ctx.current.drawImage(img,idx * SET_WIDTH,index * SET_HEIGHT,  SET_WIDTH, SET_HEIGHT);
            })
        })
    }, [data, SET_WIDTH, SET_HEIGHT])

    const clickHandler = (e) => {
        e.preventDefault()
        let offset = canvas.current.getBoundingClientRect()
        let pageX = Math.floor((e.pageX - offset.left)/SET_WIDTH*2)
        let pageY = Math.floor((e.pageY - offset.top)/SET_HEIGHT*2)
        let currentSit = data[pageY][pageX]
        if (currentSit) {
            let idx = seledSit.findIndex(ele => currentSit.id === ele.id) // 判断提交的座位是否已被选中
            let img = null
            if (idx >= 0) {
                seledSit.splice(idx, 1)  // 选中删除
                img = currentSit.state === 1 ? SINGLE.UNSELED : currentSit.state === 5 ? SINGLE.UNSELED : null
            } else {
                seledSit.push({...currentSit}) // 没选中则加入选中array
                img = currentSit.state === 1 ? SINGLE.SELED : currentSit.state === 5 ? SINGLE.UNSELED : null
            }
            setSeledSit([...seledSit])
            if (img) {
                ctx.current.clearRect(pageX * SET_WIDTH, pageY * SET_HEIGHT, SET_WIDTH, SET_HEIGHT);
                ctx.current.drawImage(img, pageX * SET_WIDTH, pageY * SET_HEIGHT, SET_WIDTH, SET_HEIGHT);
            }
        }
    }

    return (<div>
        <canvas ref={canvas} />
        <div>{aa}</div>
    </div>)
 }

 export default SitCanvas