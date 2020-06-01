import React, { useEffect, useState, useRef } from 'react';
import { connect } from 'dva';
import router from 'umi/router';
import { isWX } from '@/utils/tools';
import CardPopup from '../components/CardPopup'
import {address, store} from '../address'
import Item from '../components/item'
import {createPackageOrder} from './util'
import halfyear1 from '../img/halfyear/halfyear_01.png'
import halfyear2 from '../img/halfyear/halfyear_02.png'
import halfyear3 from '../img/halfyear/halfyear_03.png'
import halfyear4 from '../img/halfyear/halfyear_04.png'
import halfyear5 from '../img/halfyear/halfyear_05.png'
import halfyear6 from '../img/halfyear/halfyear_06.png'
import foot from '../img/halfyear/halfyear.png'

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
        const {location} = history;
        const {query} = location || {}
        const {distributorNo='D2020052711557777'} = query
        console.log(distributorNo,'distributorNo')
        if(!userId) {
            const {pathname,search} = history.location;
            let sourcePage = window.encodeURIComponent(pathname+search)
            console.log(sourcePage,'pathname,search')
            history.push({ pathname: '/login', query: { sourcePage } });
            return;
        }
        //packageId 1年卡，2半年卡，3月卡
        createPackageOrder({data:{payAmount:79,packageId:2,distributorNo},dispatch,callback(){
            console.log('月卡')
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
            <img src={halfyear1} />
            <img src={halfyear2} />
            <img src={halfyear3} />
            <div className={styles.storelist} onClick={viewStoreList}>查看泰康拜博口腔门店列表</div>
            <CardPopup 
                visible = {visible}
                CloseClick = {viewStoreList}
                title = {'泰康拜博门店列表'}
            >
                <Item address={address} store={store}/>
            </CardPopup>
            <img src={halfyear4} />
            <img src={halfyear5} />
            {/* {
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
            } */}
            <img src={halfyear6} />
            <div className = {styles.info}>
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