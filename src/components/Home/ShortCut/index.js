import React  from 'react';
import withRouter from 'umi/withRouter';
import styles from './index.module.less';
import map from 'lodash/map';

class ShortCut extends React.Component {
  constructor(props){
    super(props);
    this.state={}
  }
  goToPage(id=1) {
    this.props.history.push(`/topup?id=${id}`);
  }
  render() {
    const { list } = this.props;
    console.log('-----list', list);
    return (
      <div className={styles.shortCut} >
        <div className={styles.inner}>
          {map(list, ({ bannerItem }, idx) => (<dl key={idx} className={styles.item} onClick={this.goToPage.bind(this, bannerItem.id)}>
            <dt style={{ backgroundImage: `url(${bannerItem.image})` }}></dt>
            <dd>
              <h2>{bannerItem.abbr}</h2>
              <div className={styles.subTitle}>{bannerItem.topCornerMark}</div>
            </dd>
          </dl>))}
        </div>
      </div>
    );
  }
}

export default withRouter(ShortCut);
