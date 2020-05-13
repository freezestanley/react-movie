import React from 'react';
import cns from 'classnames';
import 'zarm/dist/zarm.min.css';
import { wxClass } from '@/utils/tools';

import './index.less';

export default function Layout(props) {
  return (
    <div className={cns('z_main_layout', wxClass('head'))}>
      <div className='z-container'>{props.children}</div>
    </div>
  )
}