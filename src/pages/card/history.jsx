import React, { useEffect, useReducer } from 'react';
import { Input, Button, Toast } from 'zarm';
import { connect } from 'dva';
import cns from 'classnames';
import router from 'umi/router';
import styles from './style/index.less';
import Card from './components/Card'

const HistoryCard = ({
    user,
    card,
    dispatch
}) => {
    const { userId } = user||{};
    const {historyCards=[], data} = card||{};
    useEffect(() => {
        if (userId) dispatch({ type: 'card/getHistoryCard', payload: { pageNo:1, pageSize: 100, isHistoryFlag: true } })
    }, [dispatch, userId])
    
    console.log(historyCards,'historyCards--')
    return (
        <div className={styles.history}>
            <div className={styles.title}>历史卡券</div>
            {
                historyCards.map((ele, idx, arr) => {
                    const {exchangeData,couponTitle,packageName,couponEndDate,status} = ele
                    let cardExchangeData = exchangeData||{}
                    return (
                        <Card
                            key = {idx.toString()}
                            border
                            // btnTitle = {(ele.status === 3 && ele.exchangeData.thirdRechargeStatus === 3) ? '联系客服' : null}
                            data = {{
                                title: couponTitle,
                                retitle: packageName, 
                                time: couponEndDate, 
                                state: status,// 'fail', === 3 ? ele.exchangeData.thirdRechargeStatus : ele.status
                                thirdStatus: cardExchangeData.thirdRechargeStatus,
                                name: cardExchangeData.productName,
                                account: cardExchangeData.rechargeAccount,
                                paytime: cardExchangeData.rechargeDate,
                                codeNo: cardExchangeData.cardSecret,
                                cardNo: cardExchangeData.cardNO,
                                remark: cardExchangeData.cardRemark,
                                historyFlag: true
                            }}
                            step = 'member'
                        >
                        </Card>
                    )
                })
            }
        </div>
    )
}

export default connect(state => ({
    card: state.card,
    user: state.user
  }))(HistoryCard);