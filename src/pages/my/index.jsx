import React,{useEffect} from 'react';
import { connect } from 'dva';
import router from 'umi/router';
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
  const userInfo = props.user.userInfo;
  console.log('props',props);
  // console.log('[9] index.jsx: ', props.user);
  //  console.log(props.banner)
  // console.log('[8] index.jsx: ', props);
  const handleExit = () => {
    props.dispatch({ type: 'user/loginOut' })
  }
  const middleBanners = filter(props.banner.list, item => item.bannerType === 2);
  const hotRecommendList = filter(props.banner.list, item => item.bannerType === 5);

  useEffect(() => {
    props.dispatch({ type: 'banner/getBanner', payload: {
      bannerType:[2,5],
      pageSize: 100,
    } });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log('middleBanners',middleBanners)
  return (
    <div className={styles.myPage}>
      <UserInfo user={props.user} />
      <MenuList />
      { !props.user.isVIP && <VipAdv />}
       
      {
        props.user.isVIP ?
        <React.Fragment>
           <div className={styles['belt-container']}>
            { !isEmpty(middleBanners) && <Belt list={middleBanners} /> }

          </div>
          <div className={styles['wallet-container']}>
            <Title name='我的钱包' />
            <Wallet />
          </div>
        </React.Fragment>:
        <React.Fragment>
          <div className={styles['wallet-container']}>
            <Title name='我的钱包' />
            <Wallet />
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
        { !isEmpty(hotRecommendList) && <HotRecommend bannerList={hotRecommendList} />}

      </div>
      
    
      <button onClick={handleExit}>退出</button>
    </div>
  );
}
export default connect(state => state)(MyPage)