import React, { useEffect, useReducer } from 'react';
import { connect } from 'dva';
import router from 'umi/router';
import styles from './style/index.less';
import Card from './components/Card'

const CardPaper = (props) => {
    const { userId } = props.user
    const { data, total,historyCards } = props.card
    useEffect(() => {
        if (userId) {
            props.dispatch({ type: 'card/getCard', payload: { pageNo:1, pageSize: 100,isHistoryFlag: false } })
            props.dispatch({ type: 'card/getHistoryCard', payload: { pageNo:1, pageSize: 100,isHistoryFlag: true } })
        }
    }, [userId])
    const gotoHistory = (item) => {
        router.push('/history');
      }
    const clickHandler = () => {
        // debugger
        // if (userId) props.dispatch({ type: 'card/getCard', payload: { pageNo:1, pageSize: 100, isHistoryFlag: false } })
    }
    return (
        <div className={styles.card}>
            <div>
                {
                    (data||[]).map((ele, idx, arr) => {
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
                            
                        } else if(ele.viewStatus === 4){
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
                            // category 1 兑换 2.直冲 3. 卡密
                            // rechargeStatus 1 充值中 2 充值成功 3 充值失败
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
                            key = {idx.toString()}
                            border
                            btnTitle = {(next === 'member' && result.status === 3) ? '联系客服' : null}
                            clickHandler = {clickHandler}
                            data = { result }
                            step = { next }
                        />)
                    })
                }
            </div>
            <div >
                <div 
                    className={styles.historyCard}
                    onClick={(e)=>gotoHistory(e)}
                >历史卡券({ (historyCards||[]).length })</div>
            </div>
            
        </div>
    )
}

export default connect(state => ({
    card: state.card,
    user: state.user
  }))(CardPaper);