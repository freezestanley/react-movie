import React, { useState, useCallback } from 'react';
import router from 'umi/router';
import { Button } from 'zarm';
import Card from '@/components/Card';
import Categories from './Categories';
import Section from './Section';
import Product from './Product';

import styles from './index.module.less';

const list = [
  {
    id: 1,
    name: '分类一',
  },
  {
    id: 2,
    name: '分类二',
  },
  {
    id: 3,
    name: '分类三',
  },
];

export default () => {
  const [selected, setSelected] = useState(undefined);

  const onCateSelected = useCallback(id => {
    // todo
    setSelected(id);
  }, []);

  return (
    <div className={styles['page']}>
      <div className={styles['search']}></div>
      <div className={styles['cates']}>
        <Categories selected={selected} list={list} onSelect={onCateSelected} />
      </div>
      {list.map(item => {
        return (
          <Section key={item.id} title={item.name} id={item.id}>
            <div className={styles['product-list']}>
              {new Array(8).fill('').map((item, idx) => {
                return (
                  <div key={idx} className={styles['product-item']}>
                    <Product />
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
};
