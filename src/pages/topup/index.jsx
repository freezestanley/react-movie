import React, { useEffect } from 'react';
import TopupNote from '@/components/Card/TopupNote';
import ProductSpecGroup from '@/components/ProductSpecGroup';
import { ProductHead } from '@/components/Product';
import PageStatus from '@/components/PageStatus';
import { connect } from 'dva';
import CardPage from './card';
import DirectPage from './direct';

import styles from './index.less';

export default connect(state => ({ product: state.productDetail.info }))(function TopupPage(props) {
  const { dispatch, location: { query }, product } = props;
  const { id: productId } = query;
  // constructor的作用
  useEffect(() => {
    dispatch({ type: 'productDetail/getProduct', payload: { productId  } });
  }, [dispatch, productId]);
  const { topCornerMark, abbr, name, detail, type  } = product

  if (!type) return <PageStatus>数据加载异常</PageStatus>;

  return (
    <>
      <ProductHead
        corner={topCornerMark}
        title={abbr}
        desc={name}
      />
      <ProductSpecGroup>
        {(tabKey) => {
          return [
            type === 1 && <DirectPage key={1} dataSource={tabKey} />,
            type === 2 && <CardPage key={2} dataSource={tabKey} />,
          ]
        }}
      </ProductSpecGroup>
      <div className={styles.topupOther}>
        <TopupNote nodes={detail || ''} />
      </div>
    </>
  );
});