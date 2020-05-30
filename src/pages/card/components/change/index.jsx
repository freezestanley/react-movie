/**
 * 
 */
import React, { useEffect, useReducer, useState } from 'react';
import { connect } from 'dva';
import router from 'umi/router';
import {Toast} from 'zarm';
import CardPopup from '../CardPopup';
import {formatDate} from '@/utils/tools';
import Dialog from '@/components/Dialog';
import {AntiCheat} from '@/utils/handlePay';
import styles from './index.less';

const Change = (props) => {
    const {visible, onMaskClick, afterOpen, afterClose, CloseClick, user, dispatch} = props
    const { userId } = user
    const {state, name, codeNo, paytime, cardNo, remark, hasDetail} = props.data
    const [cardVisible, showVisible] = useState(false)

    const exChangeCard = () => {
        CloseClick()
        if(userId){
            showVisible(true);
          }else{
            router.push('/login')
          }
    }

    const onExchangeCard = () => {
        AntiCheat({
            dispatch,
            formData:{
              couponCardCode:cardNo
            },
            type:'card/exchangeCard',
            callback: (res) => {
              console.log('res',res);
              if(res.code !== '0000'){
                Toast.show(res.msg)
              }else{
                showVisible(false)
                dispatch({ type: 'card/getCard', payload: { pageNo:1, pageSize: 100,isHistoryFlag: false } })
              } 
            }
          })
    }
    return (<CardPopup
            visible = {visible}
            onMaskClick = {onMaskClick}
            afterOpen = {afterOpen}
            afterClose = {afterClose}
            CloseClick = {CloseClick}
        >
            <div className={styles.payfail}>
                <div className={styles.pwTitle}>使用说明:{remark}</div>
                <div className={styles.pwTable}>
                    <div>
                        <div>商品名称</div><div>{name}</div>
                    </div> 
                    <div>
                        <div>兑换码</div><div>{cardNo}</div>
                    </div> 
                </div>
                
                <div className={styles.pwTable}>
                    <div>
                        <div>有效期至</div><div>{formatDate(paytime)}</div>
                    </div> 
                </div>
                {
                    !hasDetail && <div  className={styles.goldBtn} onClick={exChangeCard}>兑换</div>
                }
                <Dialog visible={cardVisible} onCancel={() => {showVisible(false);CloseClick()}} code={cardNo} onExchangeCard={onExchangeCard} />
            </div>
    </CardPopup>)
}
export default connect(state => ({
    user: state.user
}))(Change);