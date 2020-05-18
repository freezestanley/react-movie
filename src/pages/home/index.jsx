import React from 'react';
import { connect } from 'dva';
import Portal from '@/components/Portal';
import HotRecommend from '@/components/HotRecommend'
import styles from './style/index.less';
import sample from '@/assets/sample.png';
import ActivityCard from '@/components/ActivityCard'
const imgList = [
  {
    thumbnail:sample,
    image:sample,
    link:'www.baidu.com'
  },
  {
    thumbnail:sample,
    image:sample,
    link:'www.baidu.com'
  },
  {
    thumbnail:sample,
    image:sample,
    link:'www.baidu.com'
  },
  {
    thumbnail:sample,
    image:sample,
    link:'www.baidu.com'
  },
  {
    thumbnail:sample,
    image:sample,
    link:'www.baidu.com'
  },
  {
    thumbnail:sample,
    image:sample,
    link:'www.baidu.com'
  },
]

function Home ({ dispatch }) {
  // const clickHandler = () => {
  //   dispatch({
  //     type: 'home/setState',
  //     payload: '123123323',
  //   });
  // }
  const data = {
    percent:0.3
  }
  return (
    <div className={styles.homePage}>
      <Portal node="#wx_head .header_before">
        <span onClick={() => console.log('click')}>{'back'}</span>
      </Portal>
      <ActivityCard data={data}  />
      <HotRecommend list={imgList}/>
      {new Array(50).fill(1).map((i, idx) => <p key={idx}>盎司一起测试滚动区域</p>)}
    </div>
  );
}

const mapStateToProps = state => ({
  user: state.user
})
// const mapDispatchToProps = (dispatch) => {
//   return {
//     changeSex: (url) => dispatch({
//       type: 'home/setState',
//       payload: '11111111',
//     })
//   }
// }
export default connect(mapStateToProps)(Home)