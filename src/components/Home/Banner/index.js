import React  from 'react';
import Slider from "react-slick";
import map from 'lodash/map';
import cns from 'classnames';
import styles from './index.module.less';

export default class Banner extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      activeIndex: 0
    };
  }
  render() {
    const self = this;
    const { activeIndex } = this.state;
    const { list }=this.props;
    var settings = {
      dots: true,
      customPaging(idx) {
        return (<span className={cns(styles.pageItem, idx === activeIndex ? styles.active : '')}></span>);
      },
      autoplay: true,
      infinite: true,
      dotsClass: `${styles.dotsContainer}`,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      afterChange(index) {
        self.setState({ activeIndex: index });
      }
    };
    return (
      <Slider className={styles.homeBanner} {...settings}>
        {map(list, (item, idx) => (<div key={idx} className={styles.item} onClick={() => window.location.href=item.bannerLinkUrl}>
          <img src={item.bannerCoverUrl} alt="封面"/>
        </div>))}
      </Slider>
    );
  }
}
