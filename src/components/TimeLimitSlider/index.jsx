import React,{Component} from 'react';

import Slider from "react-slick";
import ActivityCard from '../ActivityCard';
import styles from './index.less';
export default class MultipleRows extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "100px",
      slidesToShow: 2,
      speed: 500,
      rows: 1,
    };
    return (
      <div>
          <div className={styles['title-box']}>
            <div className={styles['title']}>限时抢购</div>
            <div>距活动结束
              <span className={styles['color-text']}>07</span>:
              <span className={styles['color-text']}>07</span>:
              <span className={styles['color-text']}>07</span>


            </div>
          </div>
        <Slider {...settings}>
        
          <div className={styles['slider-item-box']}>
            <ActivityCard data={{percent:'0.7'}} />
          </div>
          <div className={styles['slider-item-box']}>
            <ActivityCard data={{percent:'0.7'}} />
          </div>
          <div className={styles['slider-item-box']}>
            <ActivityCard data={{percent:'0.7'}} />
          </div>
         
         
        </Slider>
      </div>
    );
  }
}