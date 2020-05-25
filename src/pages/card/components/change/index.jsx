/**
 * 
 */
import React, { useEffect, useReducer, useState } from 'react';
import CardPopup from '../CardPopup'
import styles from './index.less';

const Change = (props) => {
    const {visible, onMaskClick, afterOpen, afterClose, CloseClick} = props
    const {state, name, codeNo, paytime, cardNo} = props.data
    debugger
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
                <div className={styles.pwTitle}>使用说明：请通过"订单详情"页面点击链接激活VIP。请您在2021年12月07日前开通本会员卡</div>
                <div className={styles.pwTable}>
                    <div>
                        <div>有效期至</div><div>{paytime}</div>
                    </div> 
                </div>
                <div  className={styles.goldBtn}>兑换</div>
            </div>
    </CardPopup>)
}
export default Change