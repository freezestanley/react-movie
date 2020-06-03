import React, { useEffect, useReducer } from 'react';
import { connect } from 'dva';
import router from 'umi/router';
import styles from './style/index.less';
import Stage from './components/Stage'

const Movie = (props) => {
    return (
        <div className={styles.movie}>
            123123123123a s d f s
            <Stage />
        </div>
    )
}

export default connect(state => ({
    card: state.card,
    user: state.user
  }))(Movie);