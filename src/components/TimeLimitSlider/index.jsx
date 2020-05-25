import React,{Component} from 'react';

import Slider from "react-slick";
import ActivityCard from '../ActivityCard';
import styles from './index.less';
import moment from 'moment';
import Countdown,{zeroPad} from 'react-countdown';

const renderer = ({ hours, minutes, seconds, completed, total,type }) => {
  return (
     <div className={styles['daojishi']}>
       <span className={styles['over-text']}>{type === 'end' ? '距活动结束' :'距活动开始'}</span>
       <div className={styles['color-text']}>{zeroPad(hours)}</div> : 
       <div className={styles['color-text']}>{zeroPad(minutes)}</div> : 
       <div className={styles['color-text']}>{zeroPad(seconds)}</div>
     </div>
  )
 };

export default class MultipleRows extends Component {
  state = {
    hh:'00',
    mm:'00',
    ss:'00'
  }
  componentDidMount(){
    
  }
 
  refresh = () => {
    this.props.dispatch({ type: 'productDetail/getEventList', payload: {} });
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
   
  
    return (
      <div className={styles['timelimit-slider']}>
          <div className={styles['title-box']}>
            <div className={styles['title']}>限时抢购</div>

            {
              this.props.data.length > 0 && (
                (moment().valueOf() < this.props.data[0]['endTimestamp']) ? 
                <Countdown key={1} date={this.props.data[0]['endTimestamp']} renderer={(params) => {params.type='end'; return renderer(params)}} onComplete={this.refresh} />:
                <Countdown key={2} date={this.props.data[0]['beginTimestamp']} renderer={(params) => {params.type='start';return  renderer(params)}}  onComplete={this.refresh} />
              )
             
            }
             {/* {
              this.props.data.length > 0 && (
                (moment().valueOf() < 1590058239000) ? 
                <Countdown key={1} date={1590058239000} renderer={(params) => {params.type='end'; return renderer(params)}} zeroPadTime={2} onComplete={this.refresh} />:
                <Countdown key={2} date={1590058299000} renderer={(params) => {params.type='start';return  renderer(params)}} zeroPadTime={2} onComplete={this.refresh} />
              )
             
            } */}
             
          
          </div>
        <Slider {...settings}>
          {
            (this.props.data || []).map(item => {
              return (
                <div key={item.id} className={styles['slider-item-box']}>
                  <ActivityCard data={item} />
                </div>
              )
            })
          }
         
        
         
         
        </Slider>
      </div>
    );
  }
}