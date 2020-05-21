import React from 'react';

import './index.less';

export default function PageState(props) {
  return (
    <div className="page_status">{props.children}</div>
  )
}