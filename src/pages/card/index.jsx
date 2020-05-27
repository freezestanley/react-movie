import React, { useEffect, useReducer } from 'react';
import { connect } from 'dva';
import router from 'umi/router';
import styles from './style/index.less';
import Card from './components/Card'

const data = [{
    title: '6月券·热门会员月卡多选一', 
    retitle: '盎司白金视听年卡', 
    time: '有效期至：2020-07-30', 
    state: 'used'
},
{
    title: '6月券·热门会员月卡多选一', 
    retitle: '盎司白金视听年卡', 
    time: '有效期至：2020-07-30', 
    state: 'notime'
}]
const af = [
    {
        title: '6月券·热门会员月卡多选一', 
        retitle: '盎司白金视听年卡', 
        time: '有效期至：2020-07-30', 
        state: 'pay'
    },
    {
        title: '6月券·热门会员月卡多选一', 
        retitle: '盎司白金视听年卡', 
        time: '有效期至：2020-07-30', 
        state: 'willnotime'
    },
    {
        title: '6月券·热门会员月卡多选一', 
        retitle: '盎司白金视听年卡', 
        time: '有效期至：2020-07-30', 
        state: 'fail'
    }]

const aa = {
    title: '6月券·热门会员月卡多选一', 
    retitle: '盎司白金视听年卡', 
    time: '2020-07-30', 
    state: 'fail',
    name: '腾讯视频会员VIP月卡',
    account: '88874777839847564',
    paytime: '2020-07-30',
    codeNo: '888747778398475641',
    cardNo: '888747778398475641'
}
const aa1 = {
    title: '6月券·热门会员月卡多选一', 
    retitle: '盎司白金视听年卡', 
    time: '2020-07-30', 
    state: 'success',
    name: '腾讯视频会员VIP月卡',
    account: '88874777839847564',
    paytime: '2020-07-30',
    codeNo: '888747778398475641',
    cardNo: '888747778398475641'
}

const bb = {
    title: '6月券·热门会员月卡多选一', 
    retitle: '盎司白金视听年卡', 
    time: '2020-07-30', 
    state: 'willnotime',
    name: '腾讯视频会员VIP月卡',
    account: '88874777839847564',
    paytime: '2020-07-30',
    codeNo: '888747778398475641',
    cardNo: '888747778398475641'
}
const cc = {
    title: '6月券·热门会员月卡多选一', 
    retitle: '盎司白金视听年卡', 
    time: '2020-07-30', 
    state: 'normal',
    name: '腾讯视频会员VIP月卡',
    account: '88874777839847564',
    paytime: '2020-07-30',
    codeNo: '888747778398475641',
    cardNo: '888747778398475641'
}
const dd = {
    title: '6月券·热门会员月卡多选一', 
    retitle: '盎司白金视听年卡', 
    time: '2020-07-30', 
    state: 'pay',
    name: '腾讯视频会员VIP月卡',
    account: '88874777839847564',
    paytime: '2020-07-30',
    codeNo: '888747778398475641',
    cardNo: '888747778398475641'
}
const ee = {
    title: '6月券·热门会员月卡多选一', 
    retitle: '盎司白金视听年卡', 
    time: '2020-07-30', 
    state: 'willused',
    name: '腾讯视频会员VIP月卡',
    account: '88874777839847564',
    paytime: '2020-07-30',
    codeNo: '888747778398475641',
    cardNo: '888747778398475641'
}

const CardPaper = (props) => {
    debugger
    const { userId } = props.user
    useEffect(() => {
        debugger
        if (userId) props.dispatch({ type: 'card/getCard', payload: { pageNo:1, pageSize: 100 } })
    }, [props, userId])
    const gotoHistory = (item) => {
        router.push('/history');
      }
    return (
        <div className={styles.card}>
            <div>
                <Card 
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
                />
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