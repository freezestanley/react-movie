import React, { useCallback, useEffect, useState } from 'react';
import debounce from 'lodash/debounce';
import isEmpty from 'lodash/isEmpty';
import withRouter from 'umi/withRouter';
import { connect } from 'dva';
import map from 'lodash/map';
// import { Input } from 'zarm';
import { ReactComponent as SearchSvgIcon } from '@/assets/svg/search.svg';
import * as service from '@/services/product';
import styles from './index.module.less';

// const hotSearchList = [{ id: 1, name: 'Q币' }, { id: 16, name: '芒果TV' }, { id: 18 , name: '网易云音乐' }, ]

export default connect(state => ({ list: state.products.list, hotList: state.search.list }))(withRouter(function(props) {
  const { history, list, hotList, dispatch, location: { query: { keyword='', sourcePage } } } = props;
  const [value, setValue] = useState(keyword);
  const debouncedSearchFn = useCallback(debounce((keyword) =>{
    dispatch({ type: 'products/getProducts', payload: { keyword, status: 2 } });
  }, 200, { leading: false, trailing: true }), []); // eslint-disable-line
  const onInputChange = (e) => {
    setValue(e.target.value)
  };
  const goToHome = () => {
    if (sourcePage){
      history.replace({ pathname: window.decodeURIComponent(sourcePage) });
    } else {
      history.goBack();
    }
  };
  const goToProductPage = ({ id, name }) => {
    service.increaseHotKeyword({ keyword: name });
    history.push({ pathname: '/topup', query: { id } });
  }
  const goToProductPageV2 = (id) => {
    history.push({ pathname: '/topup', query: { id } });
  }

  useEffect(() => {
    debouncedSearchFn(value || 'empty');
  }, [debouncedSearchFn, value]);
  useEffect(() => {
    dispatch({ type: 'search/getTopSearch', payload: {} });
  }, [dispatch]);
  return (<div className={styles.searchPage}>
    <div className={styles.search}>
      <div className={styles.cancel} onClick={goToHome}>取消</div>
      <div className={styles.inputBox}>
        <SearchSvgIcon className={styles.icon} />
        <div className={styles.inputInner}>
          <input className={styles.input} value={value} placeholder="请输入商品名称" onChange={onInputChange} />
        </div>
      </div>
    </div>
    {isEmpty(list) && <div className={styles.hotSearch}>
      <h2>热门搜索</h2>
      <ol className={styles.hotList}>
        {map(hotList, (hItem, hIdx) => (<li key={hIdx} onClick={goToProductPageV2.bind(this, hItem.id)}>{hItem.keyword}</li>))}
      </ol>
    </div>}
    {!isEmpty(list) && <ol className={styles.resultList}>
      {map(list, (item, idx) => (<li key={idx} className={styles.listItem} onClick={goToProductPage.bind(this, item)}>
        <SearchSvgIcon className={styles.innerIcon} />
        <span className={styles.text}>{item.name}</span>
      </li>))}
    </ol>}

  </div>)
}));