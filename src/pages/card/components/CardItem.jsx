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

const restate = [
    {
        txt: '未绑定',
        class: 'unbind'
    },
    {
        txt: '已绑定',
        class: 'bind'
    },
    {  
        txt: '已使用',
        class: 'used'
    },
    {
        txt: '已过期',
        class: 'expire'
    },
    {
        txt: '已销毁',
        class: 'destory'
    }
]
const recharge = [
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
    }
]


// `status` int(1) NOT NULL COMMENT '卡券状态：1-未绑定，2-已绑定，3-已使用，4-已过期，5-已销毁',
// `third_recharge_status` int(1) DEFAULT NULL COMMENT '兑换的产品充值状态 1-充值中，2-充值成功，3-充值失败',

  
// if(ele.status == 3){
// 	//展示充值状态
// 	return ele.exchangeData.third_recharge_status;
// } else {
// 	return ele.status
// }

const cardItem = (props) => {
    const {border, state, btnTitle, btnClick, thirdStatus} = props
    const {title, retitle, time } =  props.data
    debugger
    let result = {
        class: 'normal',
        txt: ''
    }
    if (state === 0 && thirdStatus === 0) {

    } else {
        result = (state === 3) ? recharge[thirdStatus - 1] : restate[state - 1]
    }
    
    
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