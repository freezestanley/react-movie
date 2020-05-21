import React  from 'react';
import withRouter from 'umi/withRouter';
import styles from './index.module.less';
import map from 'lodash/map';
import list from './data.js';

class ShortCut extends React.Component {
  constructor(props){
    super(props);
    this.state={}
  }
  goToPage(id=1) {
    this.props.history.push(`/topup?productId=1`);
  }
  render() {
    return (
      <div className={styles.shortCut} onClick={this.goToPage.bind(this, 1)}>
        <div className={styles.inner}>
          {map(list, (lItem, idx) => (<dl key={idx} className={styles.item}>
            <dt></dt>
            <dd>
              <h2>{lItem.title}</h2>
              <div className={styles.subTitle}>{lItem.subTitle}</div>
            </dd>
          </dl>))}
        </div>
      </div>
    );
  }
}

export default withRouter(ShortCut);
