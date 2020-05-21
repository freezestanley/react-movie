import React, { useEffect } from 'react';
import TopupNote from '@/components/Card/TopupNote';
import ProductSpecGroup from '@/components/ProductSpecGroup';
import { ProductHead } from '@/components/Product';
import PageStatus from '@/components/PageStatus';
import { connect } from 'dva';
import CardPage from './card';
import DirectPage from './direct';

import styles from './index.less';

export default connect(state => ({ productInfo: state.productDetail.info }))(function TopupPage(props) {
  console.log('[12] index.jsx: ', props);
  const { dispatch, location: { query }, productInfo } = props;
  const { productId } = query;
  // constructor的作用
  useEffect(() => {
    dispatch({ type: 'productDetail/getProductItems', payload: productId });
  }, [dispatch, productId]);
  const { product = {}, productItems = [] } = productInfo;

  if (!product) return <PageStatus>获取商品信息失败</PageStatus>;

  const { topCornerMark, abbr, name, detail, type, image } = product;

  return (
    <>
      <ProductHead
        corner={topCornerMark}
        title={abbr}
        desc={name}
        imgUrl={image}
      />
      <ProductSpecGroup>
        {(tabKey, data) => {
          const _props = {
            dispatch,
            tabKey,
            dataSource: data,
            productItems
          };
          // TODO: test switch account
          product.rechargeAccountType = [1, 2];
          return [
            type === 1 && <DirectPage key={1} {..._props} accountTypeList={product.rechargeAccountType} />,
            type === 2 && <CardPage key={2} {..._props} />,
          ]
        }}
      </ProductSpecGroup>
      <div className={styles.topupOther}>
        <TopupNote nodes={detail || ''} />
      </div>
    </>
  );
});