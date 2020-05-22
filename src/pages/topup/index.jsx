import React, { useEffect, useReducer } from 'react';
import { connect } from 'dva';
import TopupNote from '@/components/Card/TopupNote';
import ProductSpecGroup from '@/components/ProductSpecGroup';
import { ProductHead } from '@/components/Product';
import PageStatus from '@/components/PageStatus';

import CardPage from './card';
import DirectPage from './direct';
import styles from './index.less';

export default connect(state => ({ productInfo: state.productDetail.info, isVIP: state.global.isVIP }))(function TopupPage(props) {
  const [state, setState] = useReducer((o, n) => ({ ...o, ...n}), {
    isOpenVIP: false,
    productCorner: '',
    tabKey: '',
  });
  const { dispatch, location: { query }, productInfo, isVIP } = props;
  const { productId } = query;
  // constructor的作用
  useEffect(() => {
    dispatch({ type: 'productDetail/getProductItems', payload: productId });
  }, [dispatch, productId]);
  const { product = {}, productItems = [] } = productInfo;

  if (!product) return <PageStatus>获取商品信息失败</PageStatus>;

  const { topCornerMark, abbr, name, detail, type, image } = product;

  // console.log('[30] index.jsx: ', state);

  return (
    <>
      <ProductHead
        // corner={topCornerMark}
        corner={`${state.tabKey}`}
        title={abbr}
        desc={name}
        imgUrl={image}
      />
      <ProductSpecGroup onChange={(tab) => setState({ tabKey: tab })}>
        {(tabKey, data) => {
          const _props = {
            dispatch,
            tabKey,
            dataSource: data,
            productItems,
            isVIP,
            onOpenVIP(data) {
              // console.log('[43] index.jsx: ', data);
              setState({ isOpenVIP: data });
            },
          };
          // TODO: test switch account
          // product.rechargeAccountType = [1, 2];
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