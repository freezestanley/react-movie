import React, { useState, useCallback } from 'react';
import { connect } from 'dva';
import styles from './style/index.less';
import Stage from './components/Stage';
import SiteList from './components/SiteList'

const site = row => {
    return new Array(row).fill(0).map((_, idx) => {
        const n = idx + 1;
        return [
            {id:`${n}-1`,state:1,info:`${n}排1座`},
            {id:`${n}-2`,state:4,info:`${n}排2座`},
            {id:`${n}-3`,state:4,info:`${n}排3座`},
            {id:`${n}-4`,state:4,info:`${n}排4座`},
            {id:`${n}-5`,state:4,info:`${n}排5座`},
            {id:`${n}-6`,state:4,info:`${n}排6座`},
            {id:`${n}-7`,state:4,info:`${n}排7座`},
            {id:`${n}-8`,state:4,info:`${n}排1座`},
            {id:`${n}-9`,state:4,info:`${n}排2座`},
            {id:`${n}-10`,state:1,info:`${n}排3座`},
            {id:`${n}-11`,state:3,info:`${n}排4座`},
            {id:`${n}-12`,state:1,info:`${n}排5座`},
            {id:`${n}-13`,state:4,info:`${n}排6座`},
            {id:`${n}-14`,state:4,info:`${n}排7座`},
            {id:`${n}-15`,state:4,info:`${n}排1座`},
            {id:`${n}-16`,state:4,info:`${n}排2座`},
            {id:`${n}-17`,state:1,info:`${n}排3座`},
            {id:`${n}-18`,state:3,info:`${n}排4座`},
            {id:`${n}-19`,state:1,info:`${n}排5座`},
            {id:`${n}-20`,state:4,info:`${n}排6座`},
            {id:`${n}-21`,state:4,info:`${n}排7座`},
            {id:`${n}-22`,state:4,info:`${n}排1座`},
            {id:`${n}-23`,state:4,info:`${n}排2座`},
            {id:`${n}-24`,state:1,info:`${n}排3座`},
            {id:`${n}-25`,state:3,info:`${n}排4座`},
            {id:`${n}-26`,state:1,info:`${n}排5座`},
            {id:`${n}-27`,state:4,info:`${n}排6座`},
            {id:`${n}-28`,state:4,info:`${n}排7座`},
            {id:`${n}-29`,state:1,info:`${n}排5座`},
            {id:`${n}-30`,state:4,info:`${n}排6座`},
            {id:`${n}-31`,state:4,info:`${n}排7座`},
            {id:`${n}-32`,state:4,info:`${n}排1座`},
            {id:`${n}-33`,state:4,info:`${n}排2座`},
            {id:`${n}-34`,state:1,info:`${n}排3座`},
            {id:`${n}-35`,state:3,info:`${n}排4座`},
            {id:`${n}-36`,state:1,info:`${n}排5座`},
            {id:`${n}-37`,state:4,info:`${n}排6座`},
            {id:`${n}-38`,state:4,info:`${n}排7座`},
        ]
    })
}


const Movie = (props) => {
    const [ num, setNum ] = useState([])
    
    const getSiteHandler = useCallback((e) => {
        setNum(e.slice())
        // result = e.slice()
    },[])

    const data = site(2);
    // const data = site

    return (
        <div className={styles.movie}>
            <div className={styles.title}>3D MAX 最新电影</div>
            <div className={styles.movieDetail}>
                <div>2019-03-06(周五)</div>
                <div>16:50</div>
                <div>4号厅</div>
            </div>
            <Stage site={data} siteEvent = {getSiteHandler}/>

            <SiteList data = {num} />
            <div className={styles.btn}>确定选座</div>
        </div>
    )
}

export default connect(state => ({
    card: state.card,
    user: state.user
  }))(Movie);