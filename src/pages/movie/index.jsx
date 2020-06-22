import React, { useState, useCallback, useRef } from 'react';
import { connect } from 'dva';
import styles from './style/index.less';
import Stage from './components/Stage';
import ReStage from './components/ReStage'
import SiteList from './components/SiteList'
import useDragger from '../../hooks/useDragger'

const site = row => {
    return new Array(row).fill(0).map((_, idx) => {
        const n = idx + 1;
        return [
            {id:`${n}-${n+1}`,state:5,info:`${n}排1座`},
            {id:`${n}-${n+2}`,state:5,info:`${n}排1座`},
            {id:`${n}-${n+3}`,state:1,info:`${n}排1座`},
            {id:`${n}-${n+4}`,state:4,info:`${n}排1座`},
            {id:`${n}-${n+5}`,state:4,info:`${n}排1座`},
            {id:`${n}-${n+6}`,state:5,info:`${n}排1座`},
            {id:`${n}-${n+7}`,state:5,info:`${n}排1座`},
            {id:`${n}-${n+8}`,state:1,info:`${n}排1座`},
            {id:`${n}-${n+9}`,state:1,info:`${n}排1座`},
            {id:`${n}-${n+10}`,state:1,info:`${n}排1座`},
            {id:`${n}-${n+11}`,state:1,info:`${n}排1座`},
            {id:`${n}-${n+12}`,state:4,info:`${n}排1座`},
            {id:`${n}-${n+13}`,state:4,info:`${n}排1座`},
            {id:`${n}-${n+14}`,state:1,info:`${n}排1座`},
            {id:`${n}-${n+15}`,state:1,info:`${n}排1座`},
            {id:`${n}-${n+16}`,state:1,info:`${n}排1座`},
            {id:`${n}-${n+17}`,state:1,info:`${n}排1座`},
            {id:`${n}-${n+18}`,state:1,info:`${n}排1座`},
            {id:`${n}-${n+19}`,state:1,info:`${n}排1座`},
            {id:`${n}-${n+20}`,state:4,info:`${n}排1座`},
            {id:`${n}-${n+21}`,state:4,info:`${n}排1座`},
            {id:`${n}-${n+22}`,state:1,info:`${n}排1座`},
            {id:`${n}-${n+23}`,state:7,info:`${n}排1座`},
            {id:`${n}-${n+24}`,state:7,info:`${n}排1座`},
            {id:`${n}-${n+25}`,state:1,info:`${n}排1座`},
            {id:`${n}-${n+26}`,state:2,info:`${n}排1座`},
            {id:`${n}-${n+27}`,state:2,info:`${n}排1座`},
        ]
    })
}


const Movie = (props) => {
    const [ num, setNum ] = useState([])
    
    const getSiteHandler = useCallback((e) => {
        setNum(e.slice())
    },[])

    const data = site(50);
    
    return (
        <div className={styles.movie}>
            {/* <div className={styles.title}>3D MAX 最新电影777</div> */}
            <div className={styles.movieDetail}>
                <div>2019-03-06(周五)</div>
                <div>16:50</div>
                <div>4号厅</div>
            </div>
            <ReStage site={data} siteEvent = {getSiteHandler}/>
            {/* <Stage site={data} siteEvent = {getSiteHandler}/> */}
            <SiteList data = {num} />
            <div className={styles.btn}>确定选座</div>
        </div>
    )
}

export default connect(state => ({
    card: state.card,
    user: state.user
  }))(Movie);