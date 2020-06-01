import React, { useEffect, useReducer } from 'react';
import { Input, Button, Toast } from 'zarm';
import { connect } from 'dva';
import cns from 'classnames';
import router from 'umi/router';
import styles from './style/index.less';
import Card from './components/Card'

const HistoryCard = ({
    card,
    user,
    dispatch
}) => {
    const { historyCards = [] } = card || {};
    const { userId } = user

    useEffect(() => {
        if (userId) {
            dispatch({ type: 'card/getHistoryCard', payload: { pageNo: 1, pageSize: 100, isHistoryFlag: true } })
        }
    }, [userId])

    return (
        <div className={styles.history}>
            <div className={styles.title}>历史卡券</div>
            {
                historyCards.map((ele, idx, arr) => {
                    let next = ''
                    let result = {
                        ...ele,
                        title: ele.couponTitle,
                        retitle: ele.productName,
                        time: ele.endDate,
                        name: '',
                        cardNo: ele.couponCode,
                        paytime: '',
                        remark: '',
                        account: '',
                        codeNo: '',
                        status: ele.viewStatus || 0,

                    }

                    if (ele.viewStatus === 7) {

                    } else if (ele.viewStatus === 4) {
                        if (ele.category === 1) {
                            next = 'change'
                            result.name = ele.productName
                            result.cardNo = ele.couponCode
                            result.paytime = ele.endDate
                            result.remark = ele.couponRemark
                        } else {
                            next = 'jump'
                        }
                    } else {
                        if (ele.hasDetail) {
                            if (ele.category === 1) {
                                next = 'change'
                                result.name = ele.productName
                                result.cardNo = ele.couponCode
                                result.paytime = ele.endDate
                                result.remark = ele.couponRemark
                            } else if (ele.category === 2) {
                                next = 'member'
                                result.name = ele.productName
                                result.account = ele.rechargeAccount
                                result.paytime = ele.rechargeDate
                                result.status = ele.rechargeStatus
                            } else if (ele.category === 3) {
                                next = 'copy'
                                result.name = ele.productName
                                result.cardNo = ele.cardNo
                                result.codeNo = ele.cardSecret
                                result.remark = ele.cardRemark
                            }
                        } else {

                        }
                    }

                    return (
                        <Card
                            key={idx.toString()}
                            border
                            data={result}
                            step={next}
                        />)
                })
            }
        </div>
    )
}

export default connect(state => ({
    card: state.card,
    user: state.user
}))(HistoryCard);