import React  from 'react';
import styles from './index.module.less';
import map from 'lodash/map';
import list from './data.js';

export default class ShortCut extends React.Component {
  constructor(props){
    super(props);
    this.state={}
  }
  render() {
    return (
      <div className={styles.shortCut}>
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
