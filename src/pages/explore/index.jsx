import React, { useState, useCallback, useEffect, useMemo } from 'react';
import { connect } from 'dva';
import router from 'umi/router';
import { Button } from 'zarm';
import Card from '@/components/Card';
import Categories from './Categories';
import Section from './Section';
import Product from './Product';

import styles from './index.module.less';

const defaultCate = {
  id: -1,
  name: '热门推荐',
  products: [],
};

export default connect(state => ({ explore: state.explore }))(({ dispatch, explore }) => {
  const [selected, setSelected] = useState(defaultCate.id);

  const hot = useMemo(() => explore.hot, [explore]);
  const categories = useMemo(() => explore.categories, [explore]);

  const categories2use = useMemo(() => {
    return (categories || []).reduce(
      (acc, cur) => {
        return [
          ...acc,
          {
            id: cur.category,
            name: cur.categoryName,
            products: cur.baseProductInfoDtoList.map(item => {
              return {
                id: item.id,
                logo: item.image,
                name: item.abbr,
                desc: item.bottomCornerMark,
              };
            }),
          },
        ];
      },
      [
        {
          ...defaultCate,
          products: (hot || []).map(item => {
            return {
              id: item.id,
              logo: item.bannerCoverUrl,
              name: 'todo',
              desc: 'todo',
            };
          }),
        },
      ],
    );
  }, [hot, categories]);

  const fetchData = useCallback(() => {
    dispatch({ type: 'explore/getCategories', payload: {} });
    dispatch({ type: 'explore/getHotRecommends', payload: { bannerType: [4], pageSize: 8 } });
  }, [dispatch]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const onCateSelected = useCallback(id => {
    // todo
    setSelected(id);
  }, []);

  useEffect(() => {
    console.log('explore:', explore);
  }, [explore]);

  return (
    <div className={styles['page']}>
      <div className={styles['search']}></div>
      <div className={styles['cates']}>
        <Categories selected={selected} list={categories2use} onSelect={onCateSelected} />
      </div>
      {categories2use.map(({ id, name, products }) => {
        return (
          <Section key={id} title={name} id={id}>
            <div className={styles['product-list']}>
              {products.map((p, idx) => {
                return (
                  <div key={idx} className={styles['product-item']}>
                    <Product {...p} />
                  </div>
                );
              })}
            </div>
          </Section>
        );
      })}
      {/* <Card title="商品列表" extra={<span>测试</span>}>
        Product Item
        <Button onClick={() => router.push(`/topup?id=21`)}>充值</Button>
      </Card> */}
    </div>
  );
});
