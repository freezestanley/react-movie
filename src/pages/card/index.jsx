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
                        let next = ''
                        debugger
                        let couponType = ele.couponType,
                            productType = ele.exchangeData.productType,
                            status = ele.status,
                            thirdRechargeStatus = ele.exchangeData.thirdRechargeStatus

                        next = (couponType === 6) ? 'change' :  // 会员
                                (productType === 2) ? 'copy' :  // 卡密
                                 (productType === 1 && status === 2) ? 'jump' : // 直充
                                  (productType === 1 && status === 3 && thirdRechargeStatus === 1) ? '' : 'member'



                        // if (couponType === 6) { // 会员
                        //     next = 'change'
                        // } else {
                        //     if (productType === 1) { //  直充
                        //         if (status === 2) { // 去直充
                        //             next = 'jump'
                        //         } else if (status === 3) { // 卡密成功
                        //             if (thirdRechargeStatus === 2) { // 充值成功
                        //                 next = 'member'
                        //             } 
                        //             if (thirdRechargeStatus === 3) { // 充值失败
                        //                 next = 'member'
                        //             }
                        //         }
                        //     } else if (productType === 2) { // 卡密
                        //         next = 'copy'
                        //     }
                        // }
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
                                state: ele.status,
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