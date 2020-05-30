import React,{Component} from 'react';

import Slider from "react-slick";
import cns from 'classnames';
import ActivityCard from '../ActivityCard';
import styles from './index.less';


export default class MultipleRows extends Component {
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

    const list = this.props.data;
  
    return (
      <div className={cns(styles['timelimit-slider'], list.length < 3 ? styles['less-fix'] : '')}>
        <Slider {...settings}>
          {
            (list || []).map(item => {
              return (
                <div key={item.id} className={styles['slider-item-box']}>
                  <ActivityCard data={item} />
                </div>
              )
            })
          }
        </Slider>
      </div>
    )
  }
}