import React from 'react';
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
  const data = props.global.navBar;
  // console.log('[33] index.jsx: ', data);
  return (
    <div className={cns('z_bar_layout', wxClass('head'))}>
      <div className="z_bar_cont">
        {props.children}
      </div>
      <div className="z_bar_nav">
        {data.map((item, idx) => (
          <TabItem key={idx} icon={idx+1} title={item.title} path={item.path} />
        ))}
      </div>
    </div>
  )
}

export default connect(state => state)(Layout)