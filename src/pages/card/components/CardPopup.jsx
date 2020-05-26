import React, { useEffect, useReducer, useState } from 'react';
import { Input, Button, Toast, Popup } from 'zarm';
import { connect } from 'dva';
import cns from 'classnames';
import router from 'umi/router';
import styles from './CardPopup.less';

const CardPopup = (props) => {
    const {visible, onMaskClick, afterOpen, afterClose, CloseClick, title} = props
    return (<Popup
        visible={visible}
        direction="bottom"
        onMaskClick={onMaskClick}
        afterOpen={afterOpen}
        afterClose={afterClose}
        destroy={false}
        className="test-popup"
        >
        <div className= {styles.Cardpw}>
            <div className = {styles.title}>
                {title}
                <div 
                    className = {styles.close}
                    onClick = {CloseClick}
                ></div>
            </div>
            

            <div>
                {props.children}
            </div>
        </div>
    </Popup>)
}
export default CardPopup