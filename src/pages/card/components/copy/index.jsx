/**
 * 
 */
import React, { useEffect, useReducer } from 'react';
import { Input, Button, Toast, Popup } from 'zarm';
import { connect } from 'dva';
import cns from 'classnames';
import router from 'umi/router';
import CardPopup from '../CardPopup'
import copy from 'copy-to-clipboard'
import styles from './index.less'

const CardPw = (props) => {
    const {visible, onMaskClick, afterOpen, afterClose, CloseClick} = props
    const {state, name, codeNo, paytime, cardNo, remark} = props.data
    const copyCardNo = (e) => {
        if(copy(e)){
            Toast.show('复制成功')
        } else{
            Toast.show('复制失败')
        }
    }
    const copyCodeNo = (e) => {
        if(copy(e)){
            Toast.show('复制成功')
        } else{
            Toast.show('复制失败')
        }
    }
    return (<CardPopup
            visible = {visible}
            onMaskClick = {onMaskClick}
            afterOpen = {afterOpen}
            afterClose = {afterClose}
            CloseClick = {CloseClick}
        >
            <div className={styles.cardPw}>
                
                <div className={styles.pwTable}>
                    <div>
                        <div>商品名称</div><div>{name}</div><div></div>
                    </div> 
                    <div>
                        <div>卡号</div><div>{cardNo}</div><div><span className={styles.copy} onClick={() => copyCardNo(cardNo)}>复制</span></div>
                    </div> 
                    <div>
                        <div>兑换码</div><div>{codeNo}</div><div><span className={styles.copy} onClick={() => copyCodeNo(codeNo)}>复制</span></div>
                    </div> 
                </div>
            <div className={styles.pwTitle}>使用说明:{remark}</div>
                <div className={styles.pwTable}> 
                    <div>
                        <div>充值时间</div><div>{paytime}</div><div></div>
                    </div>
                </div>
            </div>
    </CardPopup>)
}
export default CardPw