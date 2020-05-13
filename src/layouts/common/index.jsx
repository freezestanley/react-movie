import React from 'react';
import 'zarm/dist/zarm.min.css';
import { connect } from 'dva';
import { BrowserInfo, Query } from '@/utils/tools';

import './index.less';

async function wxLogin() {
  if (BrowserInfo.isWeixin && !/(open\.weixin\.qq\.com)|(code\=)/.test(window.location.href)) {
    const uri = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxef6a2198a1d0c3b4&redirect_uri=${encodeURIComponent(
      window.location.href,
    )}&response_type=code&scope=snsapi_base#wechat_redirect`;
    window.location.href = uri;
    return;
  }
  const code = Query.get('code');
  // let token = '';
  if (code) {
    // await store.dispatch({ type: 'global/login', payload: { code } });
    // const { global } = store.getState()
    // token = global.token;
    // Taro.setStorageSync('token', token);
    // getData();
    // // 去除code和state等参数
    // const queryParams = Query.parse();
    // delete queryParams.code;
    // delete queryParams.state;
    // const pureSearchStr = Query.stringify(queryParams)
    // window.history.replaceState(null, '盎司充值', `${window.location.pathname}${pureSearchStr ? `?${pureSearchStr}` : ''}`);
  }
}

function Layout(props) {
  const isWx = BrowserInfo.isWeixin;
  const store = props.global;
  if (!BrowserInfo.isPhone) return '请使用手机进行访问';
  console.log('[37] index.jsx: ', 222);
  return (
    <React.Fragment>
      {!isWx && <div className="z_layout_header">{store.title || document.title}</div>}
      {props.children}
    </React.Fragment>
  )
}

export default connect(state => state)(Layout)