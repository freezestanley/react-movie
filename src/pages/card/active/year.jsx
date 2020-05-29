import React, { useEffect, useState, useRef } from 'react';
import { connect } from 'dva';
import router from 'umi/router';

import { isWX } from '@/utils/tools';
import CardPopup from '../components/CardPopup'
import {address, store} from '../address'
import Item from '../components/item'
import {createPackageOrder} from './util'
import top from '../img/year/year_01.png'
import month from '../img/year/year_02.png'
import foot from '../img/year/year.png'
import author from '../img/year/year_03.png'
import card1 from '../img/year/year_04.png'
import card2 from '../img/year/year_05.png'
import styles from '../style/active.less';

const Active = ({
    history,
    dispatch,
    user
}) => {
    const { userId } = user||{};
    const [visible, setVisible] = useState(false)
    const [showFooter, setShowFooter] = useState(false)
    const box = useRef(null)
    const footer = useRef(null)
    const openClick = (e) => {
        if(!userId) {
            const pathname = history.location.pathname;
            history.push({ pathname: '/login', query: { sourcePage: window.encodeURIComponent(pathname) } });
            return;
        }
        //packageId 1年卡，2半年卡，3月卡
        createPackageOrder({data:{payAmount:129,packageId:1},dispatch,callback(){
            console.log('年卡')
        }})
    }
    const viewStoreList = (e) => {
        setVisible(!visible)
    }
    const throttle = function(func, delay) {            
        　　var prev = Date.now();            
        　　return function() {                
        　　　　var context = this;                
        　　　　var args = arguments;                
        　　　　var now = Date.now();                
        　　　　if (now - prev >= delay) {                    
        　　　　　　func.apply(context, args);                    
        　　　　　　prev = Date.now();                
        　　　　}            
        　　}        
        }  
    const scrollClick = (e) => {
        const top = box.current.scrollTop
        if ( top > 20) {
            setShowFooter(true)
        } else {
            setShowFooter(false)
        }
    }
    return (
        <div ref={box} className = {styles.Active} onScroll = {throttle(scrollClick, 30)}>
            <img src={top} />
            <img src={month} />
            {
                isWX ? (<img src={card1} />) : (
                    <div>
                        <img src={author} />
                        <div className={styles.storelist} onClick={viewStoreList}>查看门店列表</div>
                        <CardPopup 
                            visible = {visible}
                            CloseClick = {viewStoreList}
                            title = {'泰康拜博门店列表'}
                        >
                            <Item address={address} store={store}/>
                        </CardPopup>
                    </div>
                )
            }
            {
                isWX ? null : (<img src={card2} />)
            }
            <div className = {styles.info}>
                <div className = {styles.title}>活动规则</div>
                <div className = {styles.txt}>
                    每个月1号可以开始使用，当月不用视为过期作废
                    下单后3个商品将发放至订单详情内领取
                    每个月月卡可以直充到不同的账户内
                    上述会员，月月领，月月换每个月最多更换一次
                    视频卡会员是非TV端会员，百度网盘是超级会员
                    加，大礼包内的每个商品的领取截止日（半年）
                </div>
            </div>

            <div ref={footer} className={`${styles.footer} ${showFooter ? styles.outin : ''}`} onClick={openClick}>
                <img src={foot} />
            </div>
            
        </div>
    )
}
export default connect(state => ({
    user: state.user
  }))(Active)