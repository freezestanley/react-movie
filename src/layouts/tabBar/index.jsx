import React from 'react';
import 'zarm/dist/zarm.min.css';
import cns from 'classnames';
import router from 'umi/router';

import styles from './index.less';

function TabItem({ icon, title, path }) {
  const pathname = window.location.pathname;
  const handleTab = () => {
    if (pathname !== path) router.push(path);
  }
  const active = pathname === path;
  return (
    <div className={cns(styles.tabItem, { [styles.active]: active })} onClick={handleTab}>
      <div>
        <img src={require(`./icon/${icon}${active ? '-active' : ''}.png`)} alt="" />
        <div>{title}</div>
      </div>
    </div>
  )
}

export default function Layout(props) {
  return (
    <div className={styles.zTabBar}>
      <div className={styles.zBarCont}>
        {props.children}
      </div>
      <div className={styles.zBar}>
        <TabItem icon="1" title="首页" path="/" />
        <TabItem icon="2" title="会员" path="/vip" />
        <TabItem icon="3" title="我的" path="/my" />
      </div>
    </div>
  )
}