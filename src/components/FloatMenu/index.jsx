import React from 'react';
import router from 'umi/router';

import './index.less';

export default function FloatMenu(props) {
  return (
    <div className="float__menu">
      <img src={require('./icons/home.png')} onClick={() => router.push('/')} alt="" />
    </div>
  );
}