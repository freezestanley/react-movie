import React, { useEffect } from 'react';
import 'zarm/dist/zarm.min.css';
import { connect } from 'dva';
import { BrowserInfo, cookie } from '@/utils/tools';
import weChatAuth from '@/utils/weChatAuth';

import './index.less';

function Layout(props) {
  const isWx = BrowserInfo.isWeixin;
  const store = props.global;
  useEffect(() => {
    if (isWx && !cookie.get('token')) {
      weChatAuth(code => props.dispatch({ type: 'user/wxLogin', payload: { code }}))
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  if (!BrowserInfo.isPhone) return '请使用手机进行访问';
  return (
    <React.Fragment>
      {!isWx && (
        <div id="wx_head" className="z_layout_header">
          <div className="header_before"></div>
          <div className="z_layout_header_title">{store.title || document.title}</div>
          <div className="header_after"></div>
        </div>
      )}
      {props.children}
    </React.Fragment>
  )
}

export default connect(state => state)(Layout)