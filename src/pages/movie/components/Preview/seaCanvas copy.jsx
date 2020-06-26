import React, { useEffect, useState, useRef } from 'react';
import useZoom from '@/hooks/useZoom'
import useXState from '@/hooks/useXState'
import styles from './style/index.less';

function getImage(color, w = 200, h = 200) {
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
const SitCanvas = (props) => {
    const {data, getZoom, getSeledSit} = props
    const canvas = useRef(null)
    const ctx = useRef()
    const [seledSit, setSeledSit] = useXState([])
    // const [sitData, setSitData] = useState(data)
    let isMult = true

    const [stop] = useZoom(canvas, 
    (e, {size}) => {
        console.log(size)
        getZoom(size)
    },(e, {size}) => {
        SET_WIDTH = Math.floor(WIDTH * size <= 5 ? 5 : WIDTH * size)
        SET_HEIGHT = Math.floor(HEIGHT * size <= 5 ? 5 : HEIGHT * size)
        getZoom(size)
    },(e, {size}) => {
        SET_WIDTH = Math.floor(WIDTH * size <= 5 ? 5 : WIDTH * size)
        SET_HEIGHT = Math.floor(HEIGHT * size <= 5 ? 5 : HEIGHT * size)
        getZoom(size)
    })

    useEffect(() => {
        canvas.current.addEventListener('click', clickHandler, {
            passive: false
        })
    }, [])


    useEffect(() => {
        ctx.current = canvas.current.getContext('2d')
        canvas.current.width = (SET_WIDTH * data[0].length)
        canvas.current.height = (SET_HEIGHT * data.length)
        canvas.current.style.width = `${canvas.current.width / 2}px`
        canvas.current.style.height = `${canvas.current.height / 2}px`
        data.map((coloum, index)=> {
            coloum.map((ele, idx) =>{
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

                ctx.current.drawImage(img,idx * SET_WIDTH,index * SET_HEIGHT,  SET_WIDTH, SET_HEIGHT, 0, 0, SET_WIDTH, SET_HEIGHT);
            })
        })
    }, [data, SET_WIDTH, SET_HEIGHT])

    const clickHandler = (e) => {
        e.preventDefault()
        let offset = canvas.current.getBoundingClientRect()
        let pageX = Math.floor((e.pageX - offset.left) / (SET_WIDTH / 2))
        let pageY = Math.floor((e.pageY - offset.top) / (SET_HEIGHT / 2))
        let currentSit = data[pageY][pageX]
        if (currentSit) {
            let idx = seledSit.findIndex(ele => currentSit.id === ele.id) // 判断提交的座位是否已被选中
            if (idx >= 0) {
                seledSit.splice(idx, 1)  // 选中删除
                if (currentSit.state === 2) {
                    currentSit.state = 1
                } else if (currentSit.state === 6) {
                    currentSit.state = 5
                    if(currentSit.position === 0) {
                        data[pageY][pageX+1].state = 5
                    } else {
                        data[pageY][pageX-1].state = 5
                    }
                }
            } else {
                seledSit.push({...currentSit}) // 没选中则加入选中array
                if (currentSit.state === 1) {
                    currentSit.state = 2
                } else if (currentSit.state === 5) {
                    currentSit.state = 6
                    if(currentSit.position === 0) {
                        data[pageY][pageX+1].state = 6
                    } else {
                        data[pageY][pageX-1].state = 6
                    }
                }
            }
            setSeledSit([...seledSit], ()=>{
                getSeledSit(seledSit, data)
            })
            // setSitData([...data])
        }
    }

    return (<canvas ref={canvas} />)
 }

 export default SitCanvas