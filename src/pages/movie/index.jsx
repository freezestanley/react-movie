import React, { useState, useCallback, useRef } from 'react';
import { connect } from 'dva';
import styles from './style/index.less';
import Stage from './components/Stage';
import SiteList from './components/SiteList'
import useDragger from '../../hooks/useDragger'

const site = row => {
    return new Array(row).fill(0).map((_, idx) => {
        const n = idx + 1;
        return [
            {id:`${n}-${n+1}`,state:1,info:`${n}排1座`},
            {id:`${n}-${n+1}`,state:1,info:`${n}排1座`},
            {id:`${n}-${n+1}`,state:1,info:`${n}排1座`},
            {id:`${n}-${n+1}`,state:4,info:`${n}排1座`},
            {id:`${n}-${n+1}`,state:4,info:`${n}排1座`},
            {id:`${n}-${n+1}`,state:1,info:`${n}排1座`},
            {id:`${n}-${n+1}`,state:1,info:`${n}排1座`},
            {id:`${n}-${n+1}`,state:1,info:`${n}排1座`},
        ]
    })
}


const Movie = (props) => {
    const [ num, setNum ] = useState([])
    
    const getSiteHandler = useCallback((e) => {
        setNum(e.slice())
        // result = e.slice()
    },[])

    const data = site(20);
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