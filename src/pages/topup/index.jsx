import React, { useEffect, useReducer } from 'react';
import { connect } from 'dva';
import TopupNote from '@/components/Card/TopupNote';
import ProductSpecGroup from '@/components/ProductSpecGroup';
import { ProductHead } from '@/components/Product';
import PageStatus from '@/components/PageStatus';
import RecommendBuy from '@/components/RecommendBuy';
import BuyFooter from '@/components/BuyFooter';

import CardPage from './card';
import DirectPage from './direct';
import styles from './index.less';

export default connect(state => ({ productInfo: state.productDetail.info, isVIP: state.user.isVIP }))(function TopupPage(props) {
  const [state, setState] = useReducer((o, n) => ({ ...o, ...n}), {
    isOpenVIP: false,
    productCorner: '',
    tabKey: '',
  });
  const { dispatch, location: { query }, productInfo, isVIP } = props;
  const { id } = query;
  // constructor的作用
  useEffect(() => {
    dispatch({ type: 'productDetail/getProductItems', payload: id });
  }, [dispatch, id]);
  const { product = {}, queryProductItemDtoList = [] } = productInfo;

  if (!product) return <PageStatus>获取商品信息失败</PageStatus>;

  const { topCornerMark, abbr, name, detail, type, image } = product;

  // console.log('[30] index.jsx: ', state);

  const handleChangeSpec = (specData) => {
    console.log('[topup spec]: ', specData);
    dispatch({
      type: 'prePay/setState',
      payload: {
        type: 'product',
        main: specData
      }
    });
  };

  return (
    <>
      <ProductHead
        corner={topCornerMark}
        title={abbr}
        desc={name}
        imgUrl={image}
      />
      <ProductSpecGroup
        dataSource={queryProductItemDtoList}
        onChange={(tabKey) => {
          // const currData = queryProductItemDtoList[tabKey];
          setState({
            tabKey: tabKey,
            // productCorner: productCornerMark(productItems, isVIP, state.isOpenVIP)
          })
        }}
      >
        {(tabKey, data) => {
          const currData = queryProductItemDtoList[tabKey];
          const _props = {
            dispatch,
            tabKey,
            dataSource: data,
            productSpecItems: currData ? currData.queryProductItemRespList : [],
            isVIP,
            onOpenVIP(data) {
              // console.log('[43] index.jsx: ', data);
              setState({ isOpenVIP: data });
            },
          };
          // TODO: test switch account
          // product.rechargeAccountType = [1, 2];
          return [
            type === 1 && (
              <DirectPage
                key={1}
                {..._props}
                accountTypeList={product.rechargeAccountType}
                onChange={handleChangeSpec}
              />
            ),
            type === 2 && <CardPage key={2} {..._props} onChange={handleChangeSpec} />,
          ]
        }}
      </ProductSpecGroup>
      <div className={styles.topupOther}>
        <TopupNote nodes={detail || ''} />
      </div>
      <RecommendBuy />
      <BuyFooter />
    </>
  );
});