import React, { useCallback, useEffect, useState } from 'react';
import debounce from 'lodash/debounce';
import isEmpty from 'lodash/isEmpty';
import withRouter from 'umi/withRouter';
import { connect } from 'dva';
import map from 'lodash/map';
// import { Input } from 'zarm';
import { ReactComponent as SearchSvgIcon } from '@/assets/svg/search.svg';
import styles from './index.module.less';

const hotSearchList = [{ id: 1, name: 'Q币' }, { id: 16, name: '芒果TV' }, { id: 18 , name: '网易云音乐' }, ]

export default connect(state => ({ list: state.products.list }))(withRouter(function(props) {
  const { history, list, dispatch, location: { query: { keyword='' } } } = props;
  const [value, setValue] = useState(keyword);
  const debouncedSearchFn = useCallback(debounce((keyword) =>{
    dispatch({ type: 'products/getProducts', payload: { keyword, status: 2 } });
  }, 200, { leading: false, trailing: true }), []); // eslint-disable-line
  const onInputChange = (e) => {
    setValue(e.target.value)
  };
  const goToHome = () => {
    history.push('/');
  };
  const goToProductPage = (id) => {
    history.push({ pathname: '/topup', query: { id } })
  }
  useEffect(() => {
    debouncedSearchFn(value || 'empty');
  }, [debouncedSearchFn, value]);
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
        {map(hotSearchList, (hItem, hIdx) => (<li key={hIdx} onClick={goToProductPage.bind(this, hItem.id)}>{hItem.name}</li>))}
      </ol>
    </div>}
    {!isEmpty(list) && <ol className={styles.resultList}>
      {map(list, (item, idx) => (<li key={idx} className={styles.listItem} onClick={goToProductPage.bind(this, item.id)}>
        <SearchSvgIcon className={styles.innerIcon} />
        <span className={styles.text}>{item.name}</span>
      </li>))}
    </ol>}

  </div>)
}));