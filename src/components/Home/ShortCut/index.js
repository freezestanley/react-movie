import React  from 'react';
import withRouter from 'umi/withRouter';
import Corner from '@/components/Corner';
import styles from './index.module.less';
import map from 'lodash/map';
import allImgIcon from '@/assets/icons/all.png';

class ShortCut extends React.Component {
  constructor(props){
    super(props);
    this.state={}
  }
  goToPage(id=1) {
    this.props.history.push(`/topup?id=${id}`);
  }
  goToProductList() {
    this.props.history.push(`/explore`);
  }
  render() {
    const { list } = this.props;
    return (
      <div className={styles.shortCut} >
        <div className={styles.inner}>
          {map(list, ({ bannerItem, bannerCoverUrl },  idx) => (<dl key={idx} className={styles.item} onClick={this.goToPage.bind(this, bannerItem.id)}>
            <dt style={{ backgroundImage: `url(${bannerCoverUrl})` }}>
              {bannerItem.topCornerMark && <div className={styles.cornerBox}><Corner>{bannerItem.topCornerMark}</Corner></div>}
            </dt>
            <dd>
              <h2>{bannerItem.abbr}</h2>
              <div className={styles.subTitle}>{bannerItem.bottomCornerMark}</div>
            </dd>
          </dl>))}
          <dl className={styles.item} onClick={this.goToProductList.bind(this)}>
            <dt style={{ backgroundImage: `url(${allImgIcon})` }}></dt>
            <dd>
              <h2>全部</h2>
              <div className={styles.subTitle}>5折起</div>
            </dd>
          </dl>
        </div>
      </div>
    );
  }
}

export default withRouter(ShortCut);
