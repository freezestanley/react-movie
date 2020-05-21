import React, { Component } from 'react';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import sample from '@/assets/sample.png';
import styles from './index.less';
import router from 'umi/router';
import sample from '@/assets/sample.png';


export default class AsNavFor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
      list:[
        {
          thumbnail:sample,
          image:sample,
          link:'www.baidu.com'
        },
        {
          thumbnail:sample,
          image:sample,
          link:'www.baidu.com'
        },
        {
          thumbnail:sample,
          image:sample,
          link:'www.baidu.com'
        },
        {
          thumbnail:sample,
          image:sample,
          link:'www.baidu.com'
        },
        {
          thumbnail:sample,
          image:sample,
          link:'www.baidu.com'
        },
        
      ]
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
            (this.state.list || []).map((item,index) => {
              return (
                <div key={index} className={styles['main-image']} onClick={() => this.gotoDetail(item)}>
                  <img src={item.image} alt="" />

                </div>
              )
            })
          }

        </Slider>
        <div className={styles['list-content']}>
          {
            (this.state.list || []).map((item,index) => {
              return (
                <div key={index} className={styles['thumbnail']}>
                  <img src={item.thumbnail} alt="" />

                </div>
              )
            })
          }
        </div>
      
       
      </div>
    );
  }
}