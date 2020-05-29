/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useReducer } from 'react';
import { connect } from 'dva';
import withRouter from 'umi/withRouter';
import TopupNote from '@/components/Card/TopupNote';
import ProductSpecGroup from '@/components/ProductSpecGroup';
import { ProductHead } from '@/components/Product';
import PageStatus from '@/components/PageStatus';
import RecommendBuy from '@/components/RecommendBuy';
import BuyFooter from '@/components/BuyFooter';
import { formValidate, updateProductInfo } from '@/utils/ants';

import CardPage from './card';
import DirectPage from './direct';
import styles from './index.less';

function TopupPage(props) {
  const [state, setState] = useReducer((o, n) => ({ ...o, ...n}), {
    isOpenVIP: false,
    productCorner: '',
    tabKey: '',
    specData: {},
  });
  const { dispatch, location: { query }, productInfo, isVIP, history, prePayForm, isUpdateProductInfo } = props;
  const { id } = query;
  // constructor的作用
  useEffect(() => {
    if(`${id}` === '19') {
      history.replace('/phone');
      return
    }
    dispatch({ type: 'productDetail/getProductItems', payload: id });
  }, [dispatch, id]);

  // 如果更换商品则更新商品信息
  useEffect(() => {
    if (prePayForm && prePayForm.productId !== +id) {
      updateProductInfo(props)
    }
  }, [id, prePayForm])

  const { product = {}, queryProductItemDtoList = [] } = productInfo;

  if (!product) return <PageStatus>获取商品信息失败</PageStatus>;

  const { topCornerMark, description, name, detail, type, image } = product;

  // console.log('[30] index.jsx: ', state);

  const handleChangeSpec = (specData) => {
    // console.log('[51] index.jsx: ', isUpdateProductInfo);
    if (isUpdateProductInfo) {
      // console.log('[topup spec]: ', specData);
      setState({ specData })
      dispatch({
        type: 'prePay/setState',
        payload: {
          type: 'product',
          // type: 1：直充；2：卡密
          main: { ...specData, productId: +id, type, tabKey: state.tabKey },
        }
      });
    }
  };

  return (
    <>
      <ProductHead
        corner={topCornerMark}
        description={description}
        imgUrl={image}
      />
      <ProductSpecGroup
        defaultValue={prePayForm.tabKey}
        dataSource={queryProductItemDtoList}
        dispatch={dispatch}
        isUpdateProductInfo={isUpdateProductInfo}
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
            isVIP,
            dataSource: data,
            productSpecItems: currData ? currData.queryProductItemRespList : [],
            defaultValue: prePayForm,
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
                dispatch={dispatch}
                isUpdateProductInfo={isUpdateProductInfo}
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
      <BuyFooter isResetForm={false} onValidate={() => formValidate(state.specData, type)} />
    </>
  );
}

export default connect(state => ({
  productInfo: state.productDetail.info,
  isVIP: state.user.isVIP,
  isUpdateProductInfo: state.global.isUpdateProductInfo,
  prePayForm: state.prePay.main,
}))(withRouter(TopupPage));