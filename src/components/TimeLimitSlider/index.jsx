import React,{Component} from 'react';

import Slider from "react-slick";
import ActivityCard from '../ActivityCard';
import styles from './index.less';
import moment from 'moment';

const endTime = '2020-5-21';

const addZero = str => {
  if(str < 10){
    str = '0'+ str;
  }
  return str;
}
let si
export default class MultipleRows extends Component {
  state = {
    hh:'00',
    mm:'00',
    ss:'00'
  }
  componentDidMount(){
    si = setInterval(() => {
      const minusTime = moment.duration(moment(endTime)-moment());
      console.log('minusTime',minusTime);
      let hh = minusTime.hours();
      hh = addZero(hh)
      let mm = minusTime.minutes();
      mm = addZero(mm);
      let ss = minusTime.seconds();
      ss = addZero(ss);
      this.setState({
        hh : hh,
        mm : mm,
        ss : ss
      })
     
    },1000)
  }
  componentWillUnmount(){
    clearInterval(si);
  }
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "10px",
      slidesToShow: 2,
      speed: 500,
      rows: 1,
    };
    const data = {
      percent:'0.3',
      activityName:'Q币限时秒杀',
      description:'5折特惠秒杀'
    }
    const {hh, mm, ss} = this.state;
    return (
      <div className={styles['timelimit-slider']}>
          <div className={styles['title-box']}>
            <div className={styles['title']}>限时抢购</div>
            <div className={styles['daojishi']}>
              <span className={styles['over-text']}>距活动结束</span>
              <div className={styles['color-text']}>{hh}</div> : 
              <div className={styles['color-text']}>{mm}</div> : 
              <div className={styles['color-text']}>{ss}</div>


            </div>
          </div>
        <Slider {...settings}>
        
          <div className={styles['slider-item-box']}>
            <ActivityCard data={data} />
          </div>
          <div className={styles['slider-item-box']}>
            <ActivityCard data={data} />
          </div>
          <div className={styles['slider-item-box']}>
            <ActivityCard data={data} />
          </div>
          <div className={styles['slider-item-box']}>
            <ActivityCard data={data} />
          </div>
         
         
        </Slider>
      </div>
    );
  }
}