import React  from 'react';
import withRouter from 'umi/withRouter';
import Slider from "react-slick";
import map from 'lodash/map';
import cns from 'classnames';
import styles from './index.module.less';
import { ReactComponent as SearchSvgIcon } from '@/assets/svg/search.svg';

class Banner extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      activeIndex: 0
    };
  }

  goToSearchPage() {
    this.props.history.push('/search')
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
      autoplaySpeed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1,
      afterChange(index) {
        self.setState({ activeIndex: index });
      }
    };
    return (
      <div className={styles.homeBanner}>
        <div className={styles.searchBox}>
          <div className={styles.searchIconBox}></div>
          <div className={styles.searchInput} onClick={this.goToSearchPage.bind(this)}>
            <SearchSvgIcon className={styles.searchIcon} />
            <span className={styles.searchPlaceHolder}>搜商品、品牌优惠</span>
          </div>
        </div>
        <Slider className={styles.innerBanner}  {...settings}>
          {map(list, (item, idx) => (<div key={idx} className={styles.item} onClick={() => window.location.href=item.bannerLinkUrl}>
            <img src={item.bannerCoverUrl} alt="封面"/>
          </div>))}
        </Slider>
      </div>
    );
  }
}

export default withRouter(Banner);