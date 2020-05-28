import React, { useEffect, useReducer, useState } from 'react';
import Member from '../member'
import Change from '../change'
import Copy from '../copy'
import Item from '../CardItem'

const Card = (props) => {
    const {
        border,
        btnTitle,
        data,
        step,
        closeHandler
    } = props
    const [visible, setVisible] = useState(false)
    const btnClick = (e) => {
        setVisible(!visible)
        if (closeHandler) closeHandler(e)
    }
    return (
        <>
            <Item 
                border = {border}
                state = {data.state} 
                btnTitle = {btnTitle}
                btnClick = {btnClick}
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