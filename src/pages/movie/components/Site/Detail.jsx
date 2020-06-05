import React, { useEffect, useReducer, useState, useRef, } from 'react';
import styles from './style/index.less';
const Detail = (e) => {
    return (
        <div className={styles.detail}>
            <div><b className={styles.empty}></b>可选</div>
            <div><b className={styles.site}></b>已选</div>
            <div><b className={styles.sited}></b>已售</div>
            <div><b className={styles.fixed}></b>维修</div>
            <div><b className={styles.love}></b>情侣座</div>
        </div>
    )
}
export default Detail;