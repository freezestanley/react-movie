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


const WIDTH = 40
const HEIGHT = 40
let SET_WIDTH = 40
let SET_HEIGHT = 40
const SitCanvas = (props) => {
    const {data, getZoom, getSeledSit} = props
    const canvas = useRef(null)
    const ctx = useRef()
    const [seledSit, setSeledSit] = useXState([])
    const [sitData, setSitData] = useState(data)
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
        sitData.map((coloum, index)=> {
            coloum.map((ele, idx) =>{
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

                ctx.current.drawImage(img,idx * SET_WIDTH,index * SET_HEIGHT,  SET_WIDTH, SET_HEIGHT);
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
            function checkSea (currentNum) {
                let idx = seledSit.findIndex(ele => currentNum.id === ele.id) // 判断提交的座位是否已被选中
                if (idx >= 0) {
                    if (currentNum.state === 2) {
                        currentNum.state = 1
                        seledSit.splice(idx, 1)  // 选中删除
                    } else if (currentNum.state === 6) {
                        currentNum.state = 5
                        if(currentNum.position === 0) {
                            sitData[pageY][pageX+1].state = 5
                            seledSit.splice(idx, 2)  // 选中删除
                        } else {
                            sitData[pageY][pageX-1].state = 5
                            seledSit.splice(idx-1, 2)  // 选中删除
                        }
                    }
                } else {
                    
                    if (currentNum.state === 1) {
                        currentNum.state = 2
                        seledSit.push({...currentNum}) // 没选中则加入选中array
                    } else if (currentNum.state === 5) {
                        currentNum.state = 6
                        if(currentNum.position === 0) {
                            sitData[pageY][pageX+1].state = 6
                            seledSit.push({...currentNum})
                            seledSit.push({...sitData[pageY][pageX+1]})
                        } else {
                            sitData[pageY][pageX-1].state = 6
                            seledSit.push({...sitData[pageY][pageX-1]})
                            seledSit.push({...currentNum})
                        }
                    }
                }
                setSeledSit([...seledSit], ()=>{
                    getSeledSit(seledSit, sitData)
                })
                setSitData([...sitData])
            }
            checkSea(currentSit)
        }
    }

    return (<canvas ref={canvas} />)
 }

 export default SitCanvas