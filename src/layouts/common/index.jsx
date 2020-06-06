import React from 'react';
import { connect } from 'dva';
import 'zarm/dist/zarm.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.less';

function Layout(props) {
  return (
    <React.Fragment>
      {props.children}
    </React.Fragment>
  );
}

export default connect(state => ({ global: state.global, user: state.user }))(Layout);
