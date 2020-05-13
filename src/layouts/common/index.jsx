import React from 'react';
import 'zarm/dist/zarm.min.css';
import { BrowserInfo } from '@/utils/tools';

import './index.less';

export default function Layout(props) {
  const isWx = BrowserInfo.isWeixin;
  return (
    <React.Fragment>
      {!isWx && <div className="z_layout_header">HEAD-非微信</div>}
      {props.children}
    </React.Fragment>
  )
}