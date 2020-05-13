import React, { useEffect } from 'react';
import cns from 'classnames';
import { connect } from 'dva';
import { wxClass } from '@/utils/tools';

import './index.less';

function Layout(props) {
  // useEffect(() => {
  //   props.dispatch({
  //     type: 'global/setState',
  //     payload: {
  //       title: 'xxxa',
  //     }
  //   })
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])
  return (
    <div className={cns('z_main_layout', wxClass('head'))}>
      <div className='z-container'>{props.children}</div>
    </div>
  )
}

export default connect(state => state)(Layout)