import React, { useEffect, useReducer, useState } from 'react';
import { connect } from 'dva'
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
        dispatch,
        clickHandler
    } = props
    const [visible, setVisible] = useState(false)
    const btnClick = (e) => {
        setVisible(!visible)
        if (clickHandler) clickHandler(e)
    }
    const jumpClick = (e) => {
        console.log(data,'data--')
        dispatch({type:'card/setState',payload:{cardProductItem:data}})
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
export default connect(state => ({
    card: state.card,
    user: state.user
}))(Card);