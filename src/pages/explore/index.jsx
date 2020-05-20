import React from 'react';
import Card from '@/components/Card';

import styles from './index.less';

function ExplorePage() {
  return (
    <div className={styles.explorePage}>
      <Card title="商品列表" extra={<span>测试</span>}>
        Product List
      </Card>
    </div>
  );
}

export default ExplorePage;