import React, { useEffect } from 'react';
import 'zarm/dist/zarm.min.css';
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
    <div className={cns('z_bar_layout', wxClass('head'))}>
      <div className="z_bar_cont">
        {props.children}
      </div>
      <div className="z_bar_nav">
        <TabItem icon="1" title="首页" path="/" />
        <TabItem icon="2" title="会员" path="/vip" />
        <TabItem icon="3" title="我的" path="/my" />
      </div>
    </div>
  )
}

export default connect(state => state)(Layout)