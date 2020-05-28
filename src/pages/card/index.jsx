import React, { useEffect, useReducer } from 'react';
import { connect } from 'dva';
import router from 'umi/router';
import styles from './style/index.less';
import Card from './components/Card'



const CardPaper = (props) => {
    const { userId } = props.user
    const { data } = props.card
    useEffect(() => {
        if (userId) props.dispatch({ type: 'card/getCard', payload: { pageNo:1, pageSize: 100 } })
    }, [userId])
    const gotoHistory = (item) => {
        router.push('/history');
      }
    const closeHandler = () => {
        if (userId) props.dispatch({ type: 'card/getCard', payload: { pageNo:1, pageSize: 100 } })
    }
    return (
        <div className={styles.card}>
            <div>
                {
                    data.map((ele, idx, arr) => {
                        let next = null
                        debugger
                        if (ele.couponType === 6) { // 会员
                            next = 'change'
                        } else {
                            if (ele.exchangeData.productType === 1) { //  直充
                                if (ele.status === 2) { // 去直充
                                    next = 'jump'
                                } else if (ele.status === 3) { // 卡密成功
                                    
                                    if (ele.exchangeData.thirdRechargeStatus === 2) { // 充值成功
                                        next = 'member'
                                    } 
                                    if (ele.exchangeData.thirdRechargeStatus === 3) { // 充值失败
                                        next = 'member'
                                    }
                                }
                            } else if (ele.exchangeData.productType === 2) { // 卡密
                                next = 'copy'
                            }
                        }
                        return (
                        <Card 
                            key = {idx.toString()}
                            border
                            btnTitle = {(ele.status === 3 && ele.exchangeData.thirdRechargeStatus === 3) ? '联系客服' : null}
                            closeHandler = {closeHandler}
                            data = {{
                                title: ele.couponTitle,
                                retitle: ele.packageName, 
                                time: ele.couponEndDate, 
                                state: ele.status,// 'fail', === 3 ? ele.exchangeData.thirdRechargeStatus : ele.status
                                thirdStatus: ele.exchangeData.thirdRechargeStatus,
                                name: ele.exchangeData.productName,
                                account: ele.exchangeData.rechargeAccount,
                                paytime: ele.exchangeData.rechargeDate,
                                codeNo: ele.exchangeData.cardSecret,
                                cardNo: ele.exchangeData.cardNO,
                                remark: ele.exchangeData.cardRemark
                            }}
                            step = { next }
                        />)
                    })
                }
                {/* <Card 
                    border
                    btnTitle = '联系客服'
                    data = {aa}
                    step = 'copy'
                />
                <Card 
                    border
                    data = {bb}
                    step = 'change'
                />
                <Card 
                    border
                    data = {cc}
                    step = 'member'
                />
                <Card 
                    border
                    data = {dd}
                    step = 'member'
                />
                <Card 
                    border
                    data = {ee}
                /> */}
            </div>
            <div >
                <div 
                    className={styles.historyCard}
                    onClick={(e)=>gotoHistory(e)}
                >历史卡券(10)</div>
            </div>
            
        </div>
    )
}

export default connect(state => ({
    card: state.card,
    user: state.user
  }))(CardPaper);