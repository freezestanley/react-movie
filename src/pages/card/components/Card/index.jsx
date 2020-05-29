import React, { useEffect, useReducer, useState } from 'react';
import Member from '../member'
import Change from '../change'
import Copy from '../copy'
import Item from '../CardItem'
import router from 'umi/router'

const Card = (props) => {
    const {
        border,
        btnTitle,
        data,
        step,
        clickHandler
    } = props
    const [visible, setVisible] = useState(false)
    const btnClick = (e) => {
        setVisible(!visible)
        if (clickHandler) clickHandler(e)
    }
    const jumpClick = (e) => {
        setVisible(!visible)
        if (clickHandler) clickHandler(e)
        router.push('/memberrecharge')
    }
    return (
        <>
            <Item 
                border = {border}
                state = {data.state} 
                btnTitle = {btnTitle}
                btnClick = {step === 'jump' ? jumpClick : btnClick}
                thirdStatus = {data.thirdStatus}
                data ={data}
            />
            {step === 'member' ? (<Member 
                visible ={visible}
                CloseClick = {btnClick}
                data = {data}
            />) : null}

            {step === 'copy' ? (<Copy 
                visible ={visible}
                CloseClick = {btnClick}
                data = {data}
            />) : null}
            
            {step === 'change' ? (<Change 
                visible ={visible}
                CloseClick = {btnClick}
                data = {data}
            />) : null}
        </>
        )
}
export default Card