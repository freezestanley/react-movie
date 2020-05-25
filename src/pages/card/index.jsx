import React, { useEffect, useReducer } from 'react';
import { Input, Button, Toast } from 'zarm';
import { connect } from 'dva';
import cns from 'classnames';
import router from 'umi/router';
import styles from './style/index.less';
import CardItem from './components/CardItem'
import Cardpw from './components/Popup'

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
    time: '有效期至：2020-07-30', 
    state: 'fail'
}
const bb = {
    title: '6月券·热门会员月卡多选一', 
    retitle: '盎司白金视听年卡', 
    time: '有效期至：2020-07-30', 
    state: 'willnotime'
}
const cc = {
    title: '6月券·热门会员月卡多选一', 
    retitle: '盎司白金视听年卡', 
    time: '有效期至：2020-07-30', 
    state: 'normal'
}
const ee = {
    title: '6月券·热门会员月卡多选一', 
    retitle: '盎司白金视听年卡', 
    time: '有效期至：2020-07-30', 
    state: 'willused'
}
const dd = {
    title: '6月券·热门会员月卡多选一', 
    retitle: '盎司白金视听年卡', 
    time: '有效期至：2020-07-30', 
    state: 'pay'
}
const Local = (props) => {
    const gotoHistory = (item) => {
        router.push('/history');
      }
    return (
        <div className={styles.card}>
            <div>
            <CardItem
                border
                state = {aa.state}
                btnTitle = '联系客服'
                btnClick = {(e) => {alert('fff')}}
                data = {aa}>
            </CardItem>
            <CardItem
                border
                state = {bb.state}
                data = {bb}>
            </CardItem>
            <CardItem
                border
                state = {dd.state}
                data = {dd}>
            </CardItem>
            <CardItem
                border
                state = {cc.state}
                data = {cc}>
            </CardItem>
            <CardItem
                border
                state = {ee.state}
                data = {ee}>
            </CardItem>
            <CardItem
                border
                state = {aa.state}
                btnTitle = '联系客服'
                btnClick = {(e) => {alert('fff')}}
                data = {aa}>
            </CardItem>
            <CardItem
                border
                state = {bb.state}
                data = {bb}>
            </CardItem>
            <CardItem
                border
                state = {dd.state}
                data = {dd}>
            </CardItem>
            <CardItem
                border
                state = {cc.state}
                data = {cc}>
            </CardItem>
            <CardItem
                border
                state = {ee.state}
                data = {ee}>
            </CardItem>
            <CardItem
                border
                state = {aa.state}
                btnTitle = '联系客服'
                btnClick = {(e) => {alert('fff')}}
                data = {aa}>
            </CardItem>
            <CardItem
                border
                state = {bb.state}
                data = {bb}>
            </CardItem>
            <CardItem
                border
                state = {dd.state}
                data = {dd}>
            </CardItem>
            <CardItem
                border
                state = {cc.state}
                data = {cc}>
            </CardItem>
            <CardItem
                border
                state = {ee.state}
                data = {ee}>
            </CardItem>
            <CardItem
                border
                state = {aa.state}
                btnTitle = '联系客服'
                btnClick = {(e) => {alert('fff')}}
                data = {aa}>
            </CardItem>
            <CardItem
                border
                state = {bb.state}
                data = {bb}>
            </CardItem>
            <CardItem
                border
                state = {dd.state}
                data = {dd}>
            </CardItem>
            <CardItem
                border
                state = {cc.state}
                data = {cc}>
            </CardItem>
            <CardItem
                border
                state = {ee.state}
                data = {ee}>
            </CardItem>
            <CardItem
                border
                state = {aa.state}
                btnTitle = '联系客服'
                btnClick = {(e) => {alert('fff')}}
                data = {aa}>
            </CardItem>
            <CardItem
                border
                state = {bb.state}
                data = {bb}>
            </CardItem>
            <CardItem
                border
                state = {dd.state}
                data = {dd}>
            </CardItem>
            <CardItem
                border
                state = {cc.state}
                data = {cc}>
            </CardItem>
            <CardItem
                border
                state = {ee.state}
                data = {ee}>
            </CardItem>
            </div>
            <div >
                <div 
                    className={styles.historyCard}
                    onClick={(e)=>gotoHistory(e)}
                >历史卡券(10)</div>
            </div>
            <Cardpw />
        </div>
    )
}

export default connect(state => ({
    loading: state.loading.effects['user/login'],
  }))(Local);