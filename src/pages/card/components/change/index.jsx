/**
 * 
 */
import React, { useEffect, useReducer, useState } from 'react';
import CardPopup from '../CardPopup';
import {formatDate} from '@/utils/tools';
import styles from './index.less';

const Change = (props) => {
    const {visible, onMaskClick, afterOpen, afterClose, CloseClick} = props
    const {state, name, codeNo, paytime, cardNo, remark} = props.data
    return (<CardPopup
            visible = {visible}
            onMaskClick = {onMaskClick}
            afterOpen = {afterOpen}
            afterClose = {afterClose}
            CloseClick = {CloseClick}
        >
            <div className={styles.payfail}>
                <div className={styles.pwTable}>
                    <div>
                        <div>商品名称</div><div>{name}</div>
                    </div> 
                    <div>
                        <div>兑换码</div><div>{codeNo}</div>
                    </div> 
                </div>
                <div className={styles.pwTitle}>使用说明:{remark}</div>
                <div className={styles.pwTable}>
                    <div>
                        <div>有效期至</div><div>{formatDate(paytime)}</div>
                    </div> 
                </div>
                <div  className={styles.goldBtn}>兑换</div>
            </div>
    </CardPopup>)
}
export default Change