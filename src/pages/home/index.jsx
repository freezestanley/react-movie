import React from 'react';
import styles from './style/index.less';
import { connect } from 'dva';

function Home ({ dispatch }) {
  const clickHandler = () => {
    dispatch({
      type: 'home/setState',
      payload: '123123323',
    });
  }
  return (
    <div>
      <div>asdfasd</div>
      <h1 
        className={styles.title}
        onClick={clickHandler}
      >Page index</h1>
    </div>
  );  
}

const mapStateToProps = state => ({
  user: state.user
})
const mapDispatchToProps = (dispatch) => {
  return {
    changeSex: (url) => dispatch({
      type: 'home/setState',
      payload: '11111111',
    })
  }
}
export default connect(mapStateToProps)(Home)