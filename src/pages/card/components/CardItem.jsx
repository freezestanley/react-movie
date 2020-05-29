import {formatDate} from '@/utils/tools'
/**
 * CardItem
 * state: used: '已使用',
    notime: '已过期',
    pay: '充值中' ,
    willnotime:'即将过期',
    fail: '充值失败',
    willused: '待生效',
    normal: ''
   btnTitle   按钮文字
   btnClick   按钮click
 */
import React from 'react';
import styles from './CardItem.less';

const recharge = [
    {
        class: 'normal',
        txt: ''
    },
    {
        txt: '充值中',
        class: 'pay'  
    },
    {
        txt: '充值成功',
        class: 'success'
    },
    {
        txt: '充值失败',
        class: 'fail'
    },

    {
        txt: '即将过期',
        class: 'willexpire'
    },
    {
        txt: '已过期',
        class: 'expire'
    },
    {  
        txt: '已使用',
        class: 'used'
    },
    {
        txt: '待生效',
        class: 'waitused'
    }
]

const cardItem = (props) => {
    const {border,  btnTitle, btnClick, thirdStatus} = props
    const {title, retitle, time, historyFlag, status } =  props.data
    debugger
    // let result = {
    //     class: 'normal',
    //     txt: ''
    // }
    // if (state === 0 && thirdStatus === 0) {

    // } else {
    //     // result = (state === 3 && !historyFlag) ? recharge[thirdStatus - 1] : restate[state - 1]
    // }
    let result = recharge[status]
    
    return (
        <div className={`${styles.cardItem} ${styles[result.class]} ${border ? styles.border : ''}`}
            alt={result.txt}
        >
            {btnTitle ? (
                <div className={styles.box2col}>
                    <div onClick={(e) => btnClick(e)}>
                        <div>{title}</div>
                        <div>{retitle}</div>
                        <div>有效期至:{formatDate(time)}</div>
                    </div>
                    <div>
                        <div className={styles.yelloBtn} onClick={(e) => btnClick(e)}>{btnTitle}</div>
                    </div>
                </div>
            ) : (
                <div className={styles.box}  onClick={(e) => btnClick(e)}>
                    <div>{title}</div>
                    <div>{retitle}</div>
                    <div>有效期至: {formatDate(time)}</div>
                </div>
            ) }
            
        </div>
    )
}
export default React.memo(cardItem)