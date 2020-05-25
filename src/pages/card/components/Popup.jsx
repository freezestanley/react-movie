/**
 * 
 */
import React, { useEffect, useReducer } from 'react';
import { Input, Button, Toast, Popup } from 'zarm';
import { connect } from 'dva';
import cns from 'classnames';
import router from 'umi/router';
import styles from './Popup.less';

const cardpw = () => {
    return (<Popup
        visible={true}
        direction="bottom"
        onMaskClick={() => { this.toggle('popBottom')}}
        afterOpen={() => console.log('打开')}
        afterClose={() => console.log('关闭')}
        destroy={false}
        className="test-popup"
        >
        <div className= {styles.Cardpw}>
            <div className = {styles.close}></div>
            <div>使用说明：请通过"订单详情"页面点击链接</div>
        </div>
    </Popup>)
}
export default cardpw