import React, { useEffect, useState, useRef } from 'react';
import { connect } from 'dva';
import isEmpty from 'lodash/isEmpty';
import Redirect from 'umi/Redirect';
import cns from 'classnames';
import 'zarm/dist/zarm.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import FloatMenu from '@/components/FloatMenu';
import { BrowserInfo, Store, mapRouter, Query } from '@/utils/tools';
import weChatAuth from '@/utils/weChatAuth';
import wechatShare, { wechatShareConfig } from '@/utils/wechatShare';
import VConsole from 'vconsole';
import GlobalLoading from '@/components/GlobalLoading';
import getEnv from '@/utils/env';

import TabNavItem from './TabNavItem';
import GotoSafari from '@/components/GotoSafari';
import './index.less';

// 反欺诈
let s = 'b61f4b29a9b2#test#support'; // 测试ID
if (/vip.zhongan.io$/.test(window.location.origin)) {
  s = 'a8987701693f#prd#support'; // 生产ID
}
window.__SuperCode =
  window.SuperCode &&
  new window.SuperCode({
    scene: s,
  });

function Layout(props) {
  const isWx = BrowserInfo.isWeixin;
  const {
    global: { currRoute, routesMap, title, hasBuyFooter, tabPageList = [] },
    location,
    user,
  } = props;
  const { hasNavBar = false, footer, fullSize = false, isNeedLogin } = currRoute;
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [loading, setLoading] = useState(true);
  const ref = useRef();
  useEffect(() => {
    window.addEventListener('beforeinstallprompt', function(e) {
      // 将事件返回存储起来
      setDeferredPrompt(e);
      console.log('beforeinstallprompt e', e);
      //触发横幅显示
      if (e) {
        e.prompt();
        e.userChoice.then(function(choiceResult) {
          console.log('choiceResult', choiceResult.outcome);
          alert(choiceResult.outcome);
        });
      }
    });
  }, []);
  useEffect(() => {
    console.log(getEnv());
    if (getEnv() !== 'prd' && getEnv() !== 'local') {
      new VConsole();
    }
  }, []);

  useEffect(() => {
    if (routesMap.length === 0) {
      const _routes = mapRouter(props.route.routes);
      props.dispatch({ type: 'global/setState', payload: { routesMap: _routes } });
    }
    // 微信授权
    if (isWx && !Store.get('openId')) {
      weChatAuth(code => props.dispatch({ type: 'user/wxLogin', payload: { code } }));
    }
    props.dispatch({
      type: 'banner/getBanner',
      payload: {
        bannerType: [1, 2, 3, 4, 5],
        pageSize: 100,
      },
    });
    (async function init() {
      try {
        const valid = props.dispatch({ type: 'user/checkLogin' });
        if (!valid) {
          Store.remove('token');
        }
        // 获取用户信息
        await props.dispatch({ type: 'user/getUserInfo', hasToast: false });
        // 获取会员等级
        await props.dispatch({ type: 'user/getMembershipList' });
      } catch (e) {
      } finally {
        setLoading(false);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    let _nav = [];
    routesMap.forEach(item => {
      if (item.type === 'tabBar') {
        _nav.push(item);
      }
      if (window.location.pathname === item.path) {
        props.dispatch({
          type: 'global/setState',
          payload: { currRoute: item, title: item.title },
        });
      }
    });
    props.dispatch({ type: 'global/setState', payload: { tabPageList: _nav } });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.location.href, routesMap]);

  // scrollToTop
  useEffect(() => {
    if (location && ref.current) {
      ref.current.scrollTop = 0;
    }
  }, [location]);

  useEffect(() => {
    // iOS微信分享config
    wechatShareConfig();

    // wechatShare({
    //   title: '',
    //   desc: '',
    // })
  }, [])

  const _reg = (currRoute.path || '').replace('/', '_');
  const _classname = _reg === '_' ? '_home' : _reg;
  const hasTabBar = currRoute.type === 'tabBar';
  const isGray = currRoute.backgroundColor === 'gray';

  if (loading) {
    return <GlobalLoading text="页面加载中" />;
  }
  const { query, pathname } = location;
  if (isNeedLogin && isEmpty(user.userInfo) && pathname !== '/login') {
    const queryString = Query.stringify(query);
    const sourcePage = `${pathname}${queryString ? '?' : ''}${queryString}`;
    return <Redirect to={{ pathname: '/login', query: { sourcePage } }} />;
  }
  const isiOSWeixin = BrowserInfo.isWeixin && (BrowserInfo.isIphone || BrowserInfo.isIpad)
  return (
    <React.Fragment>
      {isiOSWeixin ? (
        <GotoSafari />
      ) : (
        <div
          className={cns('z_layout', `z${_classname}_page`)}
          style={{ backgroundColor: isGray ? 'var(--layout-bg)' : '#fff' }}
        >
          <div className="z_header_box">
            {!isWx && hasNavBar && (
              <div id="wx_head" className="z_layout_header">
                <div className="header_before"></div>
                <div className="z_layout_header_title">{title || document.title}</div>
                <div className="header_after"></div>
              </div>
            )}
          </div>

          <div className={cns('z_layout_cont', hasBuyFooter ? 'buy_footer_fix' : '')} ref={ref}>
            <div className={cns('z_layout_box', fullSize ? 'full_size' : '')}>{props.children}</div>
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
                  <TabNavItem key={idx} icon={idx + 1} title={item.title} path={item.path} />
                ))}
              </div>
            )}
            {/* { hasBuyFooter && <BuyFooter /> } */}
          </div>
        </div>
      )}
      {/* {!hasTabBar && !hasBuyFooter && <FloatMenu />} */}
    </React.Fragment>
  );
}

export default connect(state => ({ global: state.global, user: state.user }))(Layout);
