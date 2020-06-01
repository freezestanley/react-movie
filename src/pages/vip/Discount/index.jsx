import React from 'react';
import map from 'lodash/map';
import withRouter from 'umi/withRouter';
import Product from './Product';
import styles from './index.module.less';
import router from 'umi/router'

export default withRouter((props) => {
  const { list, history } = props;
  console.log(list)
  const goToDetail =(id) => {
    history.push({ pathname: '/topup', query: { id } });
  }
  return (
    <div>
      <div className={styles['product-list']}>
        {map(list, (p, idx) => {
          const data = {
            id: p.id,
            name: p.abbr,
            logo: p.image,
            desc: p.bottomCornerMark
          };
          return (
            <div key={idx} className={styles['product-item']}>
              <Product {...data} onClick={goToDetail.bind(this, data.id)}/>
            </div>
          );
        })}
        <div className={styles['more']} onClick={() => {router.replace('/explore')}}>查看更多</div>
      </div>
    </div>
  );
});
