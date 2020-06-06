import React, { useState, useCallback } from 'react';
import { connect } from 'dva';
import router from 'umi/router';
import styles from './style/index.less';
import Stage from './components/Stage'
const site = [
    [
        {id:1,state:4,info:'1排1座'},
        {id:2,state:4,info:'1排2座'},
        {id:3,state:1,info:'1排3座'},
        {id:4,state:3,info:'1排4座'},
        {id:5,state:1,info:'1排5座'},
        {id:1,state:4,info:'1排6座'},
        {id:2,state:4,info:'1排7座'},
        {id:1,state:4,info:'1排1座'},
        {id:2,state:4,info:'1排2座'},
        {id:3,state:1,info:'1排3座'},
        {id:4,state:3,info:'1排4座'},
        {id:5,state:1,info:'1排5座'},
        {id:1,state:4,info:'1排6座'},
        {id:2,state:4,info:'1排7座'},
        {id:1,state:4,info:'1排1座'},
        {id:2,state:4,info:'1排2座'},
        {id:3,state:1,info:'1排3座'},
        {id:4,state:3,info:'1排4座'},
        {id:5,state:1,info:'1排5座'},
        {id:1,state:4,info:'1排6座'},
        {id:2,state:4,info:'1排7座'},
        {id:1,state:4,info:'1排1座'},
        {id:2,state:4,info:'1排2座'},
        {id:3,state:1,info:'1排3座'},
        {id:4,state:3,info:'1排4座'},
        {id:5,state:1,info:'1排5座'},
        {id:1,state:4,info:'1排6座'},
        {id:2,state:4,info:'1排7座'},
    ],
    [
        {id:1,state:4,info:'1排1座'},
        {id:2,state:4,info:'1排2座'},
        {id:3,state:1,info:'1排3座'},
        {id:4,state:3,info:'1排4座'},
        {id:5,state:1,info:'1排5座'},
        {id:1,state:4,info:'1排6座'},
        {id:2,state:4,info:'1排7座'},
        {id:1,state:4,info:'1排1座'},
        {id:2,state:4,info:'1排2座'},
        {id:3,state:1,info:'1排3座'},
        {id:4,state:3,info:'1排4座'},
        {id:5,state:1,info:'1排5座'},
        {id:1,state:4,info:'1排6座'},
        {id:2,state:4,info:'1排7座'},
        {id:1,state:4,info:'1排1座'},
        {id:2,state:4,info:'1排2座'},
        {id:3,state:1,info:'1排3座'},
        {id:4,state:3,info:'1排4座'},
        {id:5,state:1,info:'1排5座'},
        {id:1,state:4,info:'1排6座'},
        {id:2,state:4,info:'1排7座'},
        {id:1,state:4,info:'1排1座'},
        {id:2,state:4,info:'1排2座'},
        {id:3,state:1,info:'1排3座'},
        {id:4,state:3,info:'1排4座'},
        {id:5,state:1,info:'1排5座'},
        {id:1,state:4,info:'1排6座'},
        {id:2,state:4,info:'1排7座'},
    ],
    [
        {id:1,state:4,info:'1排1座'},
        {id:2,state:4,info:'1排2座'},
        {id:3,state:1,info:'1排3座'},
        {id:4,state:3,info:'1排4座'},
        {id:5,state:1,info:'1排5座'},
        {id:1,state:4,info:'1排6座'},
        {id:2,state:4,info:'1排7座'},
        {id:1,state:4,info:'1排1座'},
        {id:2,state:4,info:'1排2座'},
        {id:3,state:1,info:'1排3座'},
        {id:4,state:3,info:'1排4座'},
        {id:5,state:1,info:'1排5座'},
        {id:1,state:4,info:'1排6座'},
        {id:2,state:4,info:'1排7座'},
        {id:1,state:4,info:'1排1座'},
        {id:2,state:4,info:'1排2座'},
        {id:3,state:1,info:'1排3座'},
        {id:4,state:3,info:'1排4座'},
        {id:5,state:1,info:'1排5座'},
        {id:1,state:4,info:'1排6座'},
        {id:2,state:4,info:'1排7座'},
        {id:1,state:4,info:'1排1座'},
        {id:2,state:4,info:'1排2座'},
        {id:3,state:1,info:'1排3座'},
        {id:4,state:3,info:'1排4座'},
        {id:5,state:1,info:'1排5座'},
        {id:1,state:4,info:'1排6座'},
        {id:2,state:4,info:'1排7座'},
    ],
    [
        {id:1,state:4,info:'1排1座'},
        {id:2,state:4,info:'1排2座'},
        {id:3,state:1,info:'1排3座'},
        {id:4,state:3,info:'1排4座'},
        {id:5,state:1,info:'1排5座'},
        {id:1,state:4,info:'1排6座'},
        {id:2,state:4,info:'1排7座'},
        {id:1,state:4,info:'1排1座'},
        {id:2,state:4,info:'1排2座'},
        {id:3,state:1,info:'1排3座'},
        {id:4,state:3,info:'1排4座'},
        {id:5,state:1,info:'1排5座'},
        {id:1,state:4,info:'1排6座'},
        {id:2,state:4,info:'1排7座'},
        {id:1,state:4,info:'1排1座'},
        {id:2,state:4,info:'1排2座'},
        {id:3,state:1,info:'1排3座'},
        {id:4,state:3,info:'1排4座'},
        {id:5,state:1,info:'1排5座'},
        {id:1,state:4,info:'1排6座'},
        {id:2,state:4,info:'1排7座'},
        {id:1,state:4,info:'1排1座'},
        {id:2,state:4,info:'1排2座'},
        {id:3,state:1,info:'1排3座'},
        {id:4,state:3,info:'1排4座'},
        {id:5,state:1,info:'1排5座'},
        {id:1,state:4,info:'1排6座'},
        {id:2,state:4,info:'1排7座'},
    ],
    [
        {id:1,state:4,info:'1排1座'},
        {id:2,state:4,info:'1排2座'},
        {id:3,state:1,info:'1排3座'},
        {id:4,state:3,info:'1排4座'},
        {id:5,state:1,info:'1排5座'},
        {id:1,state:4,info:'1排6座'},
        {id:2,state:4,info:'1排7座'},
        {id:1,state:4,info:'1排1座'},
        {id:2,state:4,info:'1排2座'},
        {id:3,state:1,info:'1排3座'},
        {id:4,state:3,info:'1排4座'},
        {id:5,state:1,info:'1排5座'},
        {id:1,state:4,info:'1排6座'},
        {id:2,state:4,info:'1排7座'},
        {id:1,state:4,info:'1排1座'},
        {id:2,state:4,info:'1排2座'},
        {id:3,state:1,info:'1排3座'},
        {id:4,state:3,info:'1排4座'},
        {id:5,state:1,info:'1排5座'},
        {id:1,state:4,info:'1排6座'},
        {id:2,state:4,info:'1排7座'},
        {id:1,state:4,info:'1排1座'},
        {id:2,state:4,info:'1排2座'},
        {id:3,state:1,info:'1排3座'},
        {id:4,state:3,info:'1排4座'},
        {id:5,state:1,info:'1排5座'},
        {id:1,state:4,info:'1排6座'},
        {id:2,state:4,info:'1排7座'},
    ],
    [
        {id:1,state:4,info:'1排1座'},
        {id:2,state:4,info:'1排2座'},
        {id:3,state:1,info:'1排3座'},
        {id:4,state:3,info:'1排4座'},
        {id:5,state:1,info:'1排5座'},
        {id:1,state:4,info:'1排6座'},
        {id:2,state:4,info:'1排7座'},
        {id:1,state:4,info:'1排1座'},
        {id:2,state:4,info:'1排2座'},
        {id:3,state:1,info:'1排3座'},
        {id:4,state:3,info:'1排4座'},
        {id:5,state:1,info:'1排5座'},
        {id:1,state:4,info:'1排6座'},
        {id:2,state:4,info:'1排7座'},
        {id:1,state:4,info:'1排1座'},
        {id:2,state:4,info:'1排2座'},
        {id:3,state:1,info:'1排3座'},
        {id:4,state:3,info:'1排4座'},
        {id:5,state:1,info:'1排5座'},
        {id:1,state:4,info:'1排6座'},
        {id:2,state:4,info:'1排7座'},
        {id:1,state:4,info:'1排1座'},
        {id:2,state:4,info:'1排2座'},
        {id:3,state:1,info:'1排3座'},
        {id:4,state:3,info:'1排4座'},
        {id:5,state:1,info:'1排5座'},
        {id:1,state:4,info:'1排6座'},
        {id:2,state:4,info:'1排7座'},
    ],
    [
        {id:1,state:4,info:'1排1座'},
        {id:2,state:4,info:'1排2座'},
        {id:3,state:1,info:'1排3座'},
        {id:4,state:3,info:'1排4座'},
        {id:5,state:1,info:'1排5座'},
        {id:1,state:4,info:'1排6座'},
        {id:2,state:4,info:'1排7座'},
        {id:1,state:4,info:'1排1座'},
        {id:2,state:4,info:'1排2座'},
        {id:3,state:1,info:'1排3座'},
        {id:4,state:3,info:'1排4座'},
        {id:5,state:1,info:'1排5座'},
        {id:1,state:4,info:'1排6座'},
        {id:2,state:4,info:'1排7座'},
        {id:1,state:4,info:'1排1座'},
        {id:2,state:4,info:'1排2座'},
        {id:3,state:1,info:'1排3座'},
        {id:4,state:3,info:'1排4座'},
        {id:5,state:1,info:'1排5座'},
        {id:1,state:4,info:'1排6座'},
        {id:2,state:4,info:'1排7座'},
        {id:1,state:4,info:'1排1座'},
        {id:2,state:4,info:'1排2座'},
        {id:3,state:1,info:'1排3座'},
        {id:4,state:3,info:'1排4座'},
        {id:5,state:1,info:'1排5座'},
        {id:1,state:4,info:'1排6座'},
        {id:2,state:4,info:'1排7座'},
    ]
]

const Movie = (props) => {
    const [ num, setNum ] = useState([])

    const getSiteHandler = useCallback((e) => {
        setNum(e.slice())
    }, [])
    
    return (
        <div className={styles.movie}>
            <div className={styles.title}>3D MAX 最新电影</div>
            <div className={styles.movieDetail}>
                <div>2019-03-06(周五)</div>
                <div>16:50</div>
                <div>4号厅</div>
            </div>

            <Stage site={site} siteEvent = {getSiteHandler}/>


            <div className={styles.choose} >
                <div className={styles.chooseTitle}>选中的座位:</div>
                <div className={styles.choosePoint}>
                    {
                       num.map((e, idx, arr) => {
                         return (<div key={`${idx}a`}  className={styles.point}>
                             {e.info}
                         </div>)
                       })
                    }
                </div>
            </div>
            <div className={styles.btn}>确定选座</div>
        </div>
    )
}

export default connect(state => ({
    card: state.card,
    user: state.user
  }))(Movie);