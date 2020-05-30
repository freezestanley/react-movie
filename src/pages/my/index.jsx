import React,{useEffect} from 'react';
import { connect } from 'dva';
import styles from './index.less';
import UserInfo from './components/UserInfo'
import MenuList from './components/MenuList'
import VipAdv from './components/VipAdv';
import Wallet from './components/Wallet'
import filter from 'lodash/filter';
import isEmpty from 'lodash/isEmpty';
import Belt from '@/components/Home/Belt';
import Title from './components/Title';
import HotRecommend from '@/components/HotRecommend';


function MyPage(props){

  const middleBanners = filter(props.banner.list, item => item.bannerType === 2);
  const exchangeSuccess = () => {
    props.dispatch({
      type: 'user/getUserInfo'
    })
  }
  useEffect(() => {
    props.dispatch({type:'order/queryMyOrders',payload:{
      pageNo:1,
      pageSize:10,
      status:1
    }})
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className={styles.myPage}>
      <UserInfo user={props.user} />
      <MenuList orders={props.order.myOrders} />
      { !props.user.isVIP && <VipAdv />}

      {
        props.user.isVIP ?
        <React.Fragment>
           <div className={styles['belt-container']}>
            { !isEmpty(middleBanners) && <Belt list={middleBanners} /> }

          </div>
          <div className={styles['wallet-container']}>
            <Title name='我的钱包' />
            <Wallet dispatch={props.dispatch} onSuccess={exchangeSuccess} user={props.user} />
          </div>
        </React.Fragment>:
        <React.Fragment>
          <div className={styles['wallet-container']}>
            <Title name='我的钱包' />
            <Wallet dispatch={props.dispatch} onSuccess={exchangeSuccess} user={props.user} />
          </div>
          <div className={styles['belt-container']}>
            { !isEmpty(middleBanners) && <Belt list={middleBanners} /> }

          </div>
        </React.Fragment>
      }
      <div className={styles['recommend-container']}>
        <div className={styles['recommend-title']}>
          <Title name='热门推荐' />
        </div>
        <HotRecommend />}
      </div>
    </div>
  );
}
export default connect(state => state)(MyPage)