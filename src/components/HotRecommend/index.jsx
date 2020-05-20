import React, { Component } from 'react';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import sample from '@/assets/sample.png';
import styles from './index.less';
import router from 'umi/router';

export default class AsNavFor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
  }
  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }
  gotoDetail = (item) => {
    router.push(item.link);
  }
 render() {
    return (
      <div className={styles['hot-recommend']}>
        <div className={styles['title']}>热门推荐</div>
        <Slider
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
        >
          {
            (this.props.list || []).map(item => {
              return (
                <div className={styles['main-image']} onClick={() => this.gotoDetail(item)}>
                  <img src={item.image} alt="" />

                </div>
              )
            })
          }

        </Slider>
        <Slider
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          slidesToShow={5}
          swipeToSlide={true}
          focusOnSelect={true}
        >
           {
            (this.props.list || []).map(item => {
              return (
                <div className={styles['thumbnail']}>
                <img src={item.thumbnail} alt="" />

                </div>
              )
            })
          }


        </Slider>
      </div>
    );
  }
}