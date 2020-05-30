import React, { Component } from 'react';
import { connect } from 'dva';
import styles from './index.less';
import router from 'umi/router';


class AsNavFor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex:0
    };
  }
  componentDidMount() {
   
  }
  gotoDetail = (item) => {
    router.push(item.link);
  }
  updateSelectImg = (index) => {
    this.setState({
      selectedIndex:index
    })
  }
 render() {
   const {selectedIndex} = this.state;
   const bannerList = this.props.bannerList.filter(item => item.bannerType === 5).slice(0,5) || [];
    // const bannerList = [{
    //   bannerCoverUrl:sample,
    //   bannerThumbnail:sample
    // },{
    //   bannerCoverUrl:sample,

    //   bannerThumbnail:sample
    // }]
   const selectedItem = bannerList.length > 0 ? bannerList[selectedIndex]:{}
    return (
      bannerList.length > 0 ? (
        <div className={styles['hot-recommend']}>
        {
          bannerList.length > 0 && (
            <div className={styles['main-image']} onClick={() => {router.push(selectedItem.bannerLinkUrl)}}>
              <img src={selectedItem.bannerCoverUrl} alt="" />
            </div>
          )
        }
        <div className={styles['list-content']}>
          {
            (bannerList || []).map((item,index) => {
              return (
                <div key={index} className={styles['thumbnail']} onClick={() => this.updateSelectImg(index)}>
                  {
                    index === this.state.selectedIndex && <div className={styles['tri']} />
                  }
                 
                  <img src={item.bannerThumbnail} alt="" />

                </div>
              )
            })
          }
        </div>
      
       
      </div>
      ):
      ""
     
    );
  }
}
export default connect(state => ({ bannerList: state.banner.list }))(AsNavFor)