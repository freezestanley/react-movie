import React, { useEffect, useReducer } from 'react';
import { Input, Button, Toast } from 'zarm';
import { connect } from 'dva';
import cns from 'classnames';
import router from 'umi/router';
import styles from './style/index.less';
import CardItem from './components/CardItem'


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
const Local = (props) => {
    
    return (
        <div className={styles.history}>
            <div className={styles.title}>历史卡券</div>
            {
                data.map((ele, idx, arr) => {
                    return (
                        <CardItem
                         key = {`${idx.toString()}`} 
                         state = {ele.state}
                         data={ele}>
                        </CardItem>
                    )
                })
            }
        </div>
    )
}

export default connect(state => ({
    loading: state.loading.effects['user/login'],
  }))(Local);