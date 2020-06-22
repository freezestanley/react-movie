import React from 'react';
import cns from 'classnames';

import './index.less';

export default function Corner({ children, className }) {
  return (
    <div className={cns('z_corner', className)}>{children}</div>
  )
}