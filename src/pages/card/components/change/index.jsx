/**
 * 
 */
import React, { useEffect, useReducer, useState } from 'react';
import { connect } from 'dva';
import router from 'umi/router';
import CardPopup from '../CardPopup';
import {formatDate} from '@/utils/tools';
import ExchangeDialog from '@/components/ExchangeDialog';
import styles from './index.less';

const Change = (props) => {
    const {visible, onMaskClick, afterOpen, afterClose, CloseClick, user, dispatch} = props
    const { userId } = user
    const {state, name, codeNo, paytime, cardNo, remark, historyFlag} = props.data
    const [cardVisible, showVisible] = useState(false)

    const exChangeCard = () => {
        if(userId){
            showVisible(true);
          }else{
            router.push('/login')
          }
    }

    const onSuccess = () => {

    }
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
                        <div>兑换码</div><div>{cardNo}</div>
                    </div> 
                </div>
                <div className={styles.pwTitle}>使用说明:{remark}</div>
                <div className={styles.pwTable}>
                    <div>
                        <div>有效期至</div><div>{formatDate(paytime)}</div>
                    </div> 
                </div>
                {
                    !historyFlag && <div  className={styles.goldBtn} onClick={exChangeCard}>兑换</div>
                }
                <ExchangeDialog visible={cardVisible} onCancel={() => showVisible(false)} dispatch={dispatch} onSuccess={onSuccess} />
            </div>
    </CardPopup>)
}
export default connect(state => ({
    user: state.user
}))(Change);