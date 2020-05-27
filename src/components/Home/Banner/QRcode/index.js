import { useState, useEffect, useRef } from 'react';
import { Popup, Icon } from 'zarm';
import styles from './index.less';

export default function ({ visible, container, onClose }) {
    // const codeRef = useRef()
    console.log(container, 'sss')
    return (
        <Popup
            visible={visible}
            direction="center"
            width="70%"
            afterClose={() => console.log('关闭')}

        >
            <div className={styles.popup}>
                <div className={styles.top}>
                    <span className={styles.title}>联系客服</span>
                    <span className={styles.desc}>长按识别二维码，关注公众号</span>
                    <span className={styles.desc}>在对话框输入文字即可联系在线客服</span>
                    <span className={styles.code}></span>
                </div>
                <div className={styles.bottom}>
                    <Icon type='wrong-round' className={styles.icon} onClick={()=> onClose(false)}/>
                </div>
            </div>
        </Popup>
    )
}