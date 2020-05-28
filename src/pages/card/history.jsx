import React, { useEffect, useReducer } from 'react';
import { Input, Button, Toast } from 'zarm';
import { connect } from 'dva';
import cns from 'classnames';
import router from 'umi/router';
import styles from './style/index.less';
import Card from './components/Card'


const data = [{
    title: '6月券·热门会员月卡多选一', 
    retitle: '盎司白金视听年卡', 
    time: '2020-07-30', 
    state: 'used',
    name: '腾讯视频会员VIP月卡',
    account: '88874777839847564',
    paytime: '2020-07-30',
    codeNo: '888747778398475641',
    cardNo: '888747778398475641'
},
{
    title: '6月券·热门会员月卡多选一', 
    retitle: '盎司白金视听年卡', 
    time: '2020-07-30', 
    state: 'notime',
    name: '腾讯视频会员VIP月卡',
    account: '88874777839847564',
    paytime: '2020-07-30',
    codeNo: '888747778398475641',
    cardNo: '888747778398475641'
}]

const Local = ({
    user,
    card,
    dispatch
}) => {
    const { userId } = user||{};
    const {historyCards=[]} = card||{};
    useEffect(() => {
        if (userId) dispatch({ type: 'card/getHistoryCard', payload: { pageNo:1, pageSize: 100, isHistoryFlag: true } })
    }, [dispatch, userId])
    console.log(historyCards,'historyCards--')
    return (
        <div className={styles.history}>
            <div className={styles.title}>历史卡券</div>
            {
                data.map((ele, idx, arr) => {
                    return (
                        <Card
                         key = {`${idx.toString()}`} 
                         state = {ele.state}
                         data={ele}>
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
  }))(Local);