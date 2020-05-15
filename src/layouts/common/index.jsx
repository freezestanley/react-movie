import React, { useEffect } from 'react';
import { connect } from 'dva';
import cns from 'classnames';
import 'zarm/dist/zarm.min.css';
import { BrowserInfo, cookie } from '@/utils/tools';
import weChatAuth from '@/utils/weChatAuth';

import TabNavItem from './TabNavItem';
import './index.less';

function mapRouter(oData) {
  const _routes = [];
  function _mapRouter(data) {
    // console.log('[12] index.jsx: ', data);
    if (Array.isArray(data)) {
      data.forEach(item => {
        if (item.path) {
          if (item.routes && Array.isArray(item.routes)) {
            item.routes.forEach((item2) => {
              if (item2.path && !item2.routes) {
                _routes.push(item2);
              } else {
                _mapRouter(item2);
              }
            })
          } else {
            _routes.push(item);
          }
        }
      })
    }
  }
  _mapRouter(oData);
  return _routes;
}

function Layout(props) {
  const isWx = BrowserInfo.isWeixin;
  const store = props.global;
  useEffect(() => {
    if (isWx && !cookie.get('token')) {
      weChatAuth(code => props.dispatch({ type: 'user/wxLogin', payload: { code }}))
    }
    if (store.routesMap.length === 0) {
      const _routes = mapRouter(props.route.routes);
      props.dispatch({ type: 'global/setState', payload: { routesMap: _routes }})
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  useEffect(() => {
    let _nav = [];
    store.routesMap.forEach(item => {
      if (item.type === 'navBar') {
        _nav.push(item);
      }
      if (window.location.pathname === item.path) {
        props.dispatch({ type: 'global/setState', payload: { currRoute: item, title: item.title }})
      }
    })
    props.dispatch({ type: 'global/setState', payload: { navBar: _nav }})
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.location.href, store.routesMap])

  const currPage = store.currRoute;
  const hasNavBar = currPage.type === 'navBar';
  // console.log('[65] index.jsx: ', currPage);

  if (!BrowserInfo.isPhone) return '请使用手机进行访问';
  return (
    <div className={cns('z_layout', { z_navbar_layout: hasNavBar })}>
      {!isWx && (
        <div id="wx_head" className="z_layout_header">
          <div className="header_before"></div>
          <div className="z_layout_header_title">{store.title || document.title}</div>
          <div className="header_after"></div>
        </div>
      )}
      <div className="z_layout_cont">
        {props.children}
      </div>
      {hasNavBar && (
        <div className="z_layout_navbar">
          {store.navBar.map((item, idx) => (
            <TabNavItem key={idx} icon={idx+1} title={item.title} path={item.path} />
          ))}
        </div>
      )}
    </div>
  )
}

export default connect(state => state)(Layout)