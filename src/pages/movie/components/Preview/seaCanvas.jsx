import React, { useEffect, useState, useRef } from 'react';
import useZoom from '@/hooks/useZoom'
import useXState from '@/hooks/useXState'
import styles from './style/index.less';

function getImage(color, w = 10, h = 10) {
    let ca = document.createElement('canvas')
    let ctx = ca.getContext('2d')
    ctx.fillStyle = color; 
    ctx.fillRect(0,0,w,h)
    let img = new Image()
    img.src = ca.toDataURL("image/png")
    return img
}
const SINGLE = {
    EMPTY: new Image(),     // 0
    UNSELED: getImage('#fff'), // 1
    SELED: getImage('#32e81e'), // 2
    FIX: getImage('#ccc'), // 3
    SALED: getImage('#f00') // 4
}
const MULT = {
    UNSELED: [ getImage('#fff'), getImage('#fff')], // 5
    SELED: [getImage('#32e81e'), getImage('#32e81e')], // 6
    SALED: [getImage('#f00'), getImage('#f00')] // 7
}


const WIDTH = 10
const HEIGHT = 10
let SET_WIDTH = 10
let SET_HEIGHT = 10
const SeaCanvas = (props) => {
    const {data, getZoom, getSeledSit} = props
    const canvas = useRef(null)
    const ctx = useRef()
    let isMult = true

    useEffect(() => {
        ctx.current = canvas.current.getContext('2d')
        canvas.current.width = (SET_WIDTH * data[0].length)
        canvas.current.height = (SET_HEIGHT * data.length)
        canvas.current.style.width = `${canvas.current.width / 2}px`
        canvas.current.style.height = `${canvas.current.height / 2}px`
        data.map((coloum, index)=> {
            coloum.map((ele, idx) =>{
                let imgw = SET_WIDTH
                let imgh = SET_HEIGHT - 3
                let img = null
                if (ele.state === 0) {
                    img = SINGLE.EMPTY
                    imgw = imgw - 3
                } else if (ele.state === 1) {
                    img = SINGLE.UNSELED
                    imgw = imgw - 3
                } else if (ele.state === 2) {
                    img = SINGLE.SELED
                    imgw = imgw - 3
                } else if (ele.state === 3) {
                    img = SINGLE.FIX
                    imgw = imgw - 3
                } else if (ele.state === 4) {
                    img = SINGLE.SALED
                    imgw = imgw - 3
                } else if (ele.state === 5) {
                    if (isMult) {
                        img = MULT.UNSELED[0]
                        isMult = false
                        ele.position = 0
                    } else {
                        img = MULT.UNSELED[1]
                        isMult = true
                        ele.position = 1
                        imgw = imgw - 3
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
                        imgw = imgw - 3
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
                        imgw = imgw - 3
                    }
                }
                let x = idx > 0 ? (idx * SET_WIDTH) : 0
                let y = index > 0 ? (index * SET_HEIGHT) : 0
                ctx.current.drawImage(img, 0, 0, SET_WIDTH, SET_HEIGHT, x, y, imgw, imgh);
            })
        })
    }, [data, SET_WIDTH, SET_HEIGHT])


    return (<canvas ref={canvas} />)
 }

 export default SeaCanvas