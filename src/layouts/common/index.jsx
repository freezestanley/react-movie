import React, { useEffect } from 'react';
import { connect } from 'dva';
import cns from 'classnames';
import 'zarm/dist/zarm.min.css';
import { BrowserInfo, Store } from '@/utils/tools';
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
  // const store = props.global;
  const { global: {
    currRoute,
    routesMap,
    title,
    tabPageList=[]
  } } =props;
  const { hasNavBar = true, footer } = currRoute;

  useEffect(() => {
    if (isWx && !Store.get('openId')) {
      weChatAuth(code => props.dispatch({ type: 'user/wxLogin', payload: { code }}))
    }
    if (routesMap.length === 0) {
      const _routes = mapRouter(props.route.routes);
      props.dispatch({ type: 'global/setState', payload: { routesMap: _routes }})
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  useEffect(() => {
    let _nav = [];
    routesMap.forEach(item => {
      if (item.type === 'tabBar') {
        _nav.push(item);
      }
      if (window.location.pathname === item.path) {
        props.dispatch({ type: 'global/setState', payload: { currRoute: item, title: item.title }})
      }
    })
    props.dispatch({ type: 'global/setState', payload: { tabPageList: _nav }})
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.location.href, routesMap])

  const _reg = (currRoute.path || '').replace('/', '_');
  const _classname = _reg === '_' ? '_home' : _reg;
  const hasTabBar = currRoute.type === 'tabBar';
  // console.log('[65] index.jsx: ', currPage);
  const isGray = currRoute.backgroundColor === 'gray';

  if (!BrowserInfo.isPhone) return '请使用手机进行访问';
  return (
    <div className={cns('z_layout', `z${_classname}_page`)} style={{ backgroundColor: isGray ? 'var(--layout-bg)' : '#fff' }}>
      <div className='z_header_box'>
        {!isWx && hasNavBar && (
          <div id="wx_head" className="z_layout_header">
            <div className="header_before"></div>
            <div className="z_layout_header_title">{title || document.title}</div>
            <div className="header_after"></div>
          </div>
        )}
      </div>

      <div className="z_layout_cont">
        <div className="z_layout_box">
          {props.children}
        </div>
        {(footer || footer === undefined) && (
          <div className="za-footer">
            <img src={require(`@/assets/footer-bg${isGray ? '-gray' : ''}.png`)} alt="" />
          </div>
        )}
      </div>
      <div className="z_footer_box">
        {hasTabBar && (
          <div className="z_layout_navbar">
            {tabPageList.map((item, idx) => (
              <TabNavItem key={idx} icon={idx+1} title={item.title} path={item.path} />
            ))}
          </div>
        )}
      </div>

    </div>
  )
}

export default connect(state => state)(Layout)