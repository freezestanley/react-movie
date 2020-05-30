/**
 * 
 */
import React, { useEffect, useReducer } from 'react';
import CardPopup from '../CardPopup';
import {formatDate} from '@/utils/tools';
import styles from './index.less';

const statusTxt = {
    1:'充值中',
    2:'成功',
    3:'充值失败'
}
const CardMember = (props) => {
    const {visible, onMaskClick, afterOpen, afterClose, CloseClick} = props
    const {status, name, account, paytime,historyFlag} = props.data
    // debugger
    return (
        <CardPopup
            visible = {visible}
            onMaskClick = {onMaskClick}
            afterOpen = {afterOpen}
            afterClose = {afterClose}
            CloseClick = {CloseClick}
        >
            <div className={styles.cardmember}>
                <div className={styles.pwTable}>
                    <div>
                        <div>商品名称</div><div>{name}</div>
                    </div> 
                    <div>
                        <div>充值账号</div><div>{account}</div>
                    </div> 
                    <div>
                        <div>充值时间</div><div>{formatDate(paytime)}</div>
                    </div> 
                    <div>
                        <div>充值状态</div>
                        <div>
                            {
                                status !== 3 ? statusTxt[status] :
                                <span className={styles.fail}>{statusTxt[status]}</span>
                            }
                        </div>
                    </div>
                </div>
                { status === 3 ? (<div  className={styles.goldBtn}>联系客服</div>) : ''}
            </div>
    </CardPopup>)
}
export default CardMember