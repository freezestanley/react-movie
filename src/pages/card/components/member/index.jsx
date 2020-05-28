/**
 * 
 */
import React, { useEffect, useReducer } from 'react';
import CardPopup from '../CardPopup';
import {formatDate} from '@/utils/tools';
import styles from './index.less';

const CardMember = (props) => {
    const {visible, onMaskClick, afterOpen, afterClose, CloseClick} = props
    const {state, name, account, paytime} = props.data
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
                                state !== 'fail' ? '成功' : (<span className={styles.fail}>充值失败</span>)}
                        </div>
                    </div>
                </div>
                { state !== 'fail' ? null : (<div  className={styles.goldBtn}>联系客服</div>)}
            </div>
    </CardPopup>)
}
export default CardMember