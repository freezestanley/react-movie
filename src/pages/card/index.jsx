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
        if (userId) props.dispatch({ type: 'card/getCard', payload: { pageNo:1, pageSize: 100 } })
    }
    return (
        <div className={styles.card}>
            <div>
                {
                    data.map((ele, idx, arr) => {
                        let next = ''
                        let result = {
                            title: ele.couponTitle,
                            retitle: ele.productName, 
                            time: ele.endDate, 
                            name: '',
                            cardNo: '',
                            paytime: '',
                            remark: '',
                            account: '',
                            codeNo: '',
                            status: ele.viewStatus || 0
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
                            if (ele.hasDetail) {
                                if (ele.category === 1) {
                                    next = 'change'
                                    result.name = ele.productName
                                    result.cardNo = ele.couponCode
                                    result.paytime = ele.endDate
                                    result.remark = ele.couponRemark 
                                } else if (ele.category === 2) {
                                    if (ele.rechargeStatus !== 1) {
                                        next = 'member'
                                        result.name = ele.productName
                                        result.account = ele.rechargeAccount
                                        result.paytime = ele.rechargeDate
                                        // result.status = ele.rechargeStatus
                                    }

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
                >历史卡券({ (historyCards||[]).length })</div>
            </div>
            
        </div>
    )
}

export default connect(state => ({
    card: state.card,
    user: state.user
  }))(CardPaper);