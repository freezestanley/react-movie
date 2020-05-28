import React, { useState, useCallback, useEffect, useMemo, useRef } from 'react';
import { connect } from 'dva';
import Categories from './Categories';
import Section from './Section';
import Product from './Product';

import styles from './index.module.less';

const defaultCate = {
  id: -1,
  name: '全部',
  products: [],
};

export default connect(state => ({ explore: state.explore }))(({ history, dispatch, explore }) => {
  const [selected, setSelected] = useState(defaultCate.id);
  const catesEleRef = useRef();

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
              id: item.bannerItem.id,
              logo: item.bannerCoverUrl,
              name: item.bannerItem.abbr,
              desc: item.bannerItem.bottomCornerMark,
            };
          }),
        },
      ],
    );
  }, [hot, categories]);

  const fetchData = useCallback(() => {
    dispatch({ type: 'explore/getCategories', payload: {} });
    // dispatch({ type: 'explore/getHotRecommends', payload: { bannerType: [4], pageSize: 8 } });
  }, [dispatch]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const onCateSelected = useCallback(id => {
    setSelected(id);

    const scroll = top => {
      const container = document.querySelector('.z_layout_cont');
      if (container.scrollTo) {
        container.scrollTo({
          top: top,
          behavior: 'smooth',
        });
      } else {
        container.scrollTop = top;
      }
    };

    if (id === defaultCate.id) {
      scroll(0);
    } else {
      const section = document.querySelector(`#section-${id}`);
      scroll(section.offsetTop - catesEleRef.current.offsetTop);
    }
  }, []);

  return (
    <div className={styles['page']}>
      <div
        className={styles['search']}
        onClick={() => {
          history.push('/search');
        }}
      >
        搜索
      </div>
      <div className={styles['cates']} ref={catesEleRef}>
        <Categories selected={selected} list={categories2use} onSelect={onCateSelected} />
      </div>
      <div
        style={{
          height: '80px',
          background: 'white',
        }}
      ></div>
      {categories2use
        .filter(item => item.id !== defaultCate.id)
        .map(({ id, name, products }) => {
          return (
            <div key={id} id={`section-${id}`} className={styles['section']}>
              <Section title={name}>
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
            </div>
          );
        })}
    </div>
  );
});
