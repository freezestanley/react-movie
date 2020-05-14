import React from 'react';
import { connect } from 'dva';
import Portal from '@/components/Portal';

import styles from './style/index.less';

function Home ({ dispatch }) {
  // const clickHandler = () => {
  //   dispatch({
  //     type: 'home/setState',
  //     payload: '123123323',
  //   });
  // }
  return (
    <div className={styles.homePage}>
      <Portal node="#wx_head .header_before">
        <span onClick={() => console.log('click')}>{'back'}</span>
      </Portal>
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