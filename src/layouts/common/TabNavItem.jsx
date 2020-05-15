import React from 'react';
import cns from 'classnames';
import router from 'umi/router';

export default function TabNavItem({ icon, title, path }) {
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