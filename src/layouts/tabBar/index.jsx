import React, { useEffect } from 'react';
import cns from 'classnames';
import router from 'umi/router';
import { connect } from 'dva';
import { wxClass } from '@/utils/tools';

import './index.less';

function TabItem({ icon, title, path }) {
  const pathname = window.location.pathname;
  const handleTab = () => {
    if (pathname !== path) router.push(path);
  }
  const active = pathname === path;
  return (
    <div className={cns('z_tab_item', { active })} onClick={handleTab}>
      <div>
        <img src={require(`./icon/${icon}${active ? '-active' : ''}.png`)} alt="" />
        <div>{title}</div>
      </div>
    </div>
  )
}

const navMenu = {
  '/': '首页',
  '/vip': '会员',
  '/my': '我的',
}

function Layout(props) {
  const pathname = window.location.pathname;
  useEffect(() => {
    props.dispatch({ type: 'global/title', payload: navMenu[pathname] });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])
  return (
    <div className={cns('z_bar_layout', wxClass('head'))}>
      <div className="z_bar_cont">
        {props.children}
      </div>
      <div className="z_bar_nav">
        {Object.keys(navMenu).map((path, idx) => (
          <TabItem key={idx} icon={idx+1} title={navMenu[path]} path={path} />
        ))}
      </div>
    </div>
  )
}

export default connect(state => state)(Layout)