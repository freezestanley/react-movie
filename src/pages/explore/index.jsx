import React from 'react';
import router from 'umi/router';
import { Button } from 'zarm';
import Card from '@/components/Card';

import styles from './index.less';

function ExplorePage() {
  return (
    <div className={styles.explorePage}>
      <Card title="商品列表" extra={<span>测试</span>}>
        Product Item
        <Button onClick={() => router.push(`/topup?productId=1`)}>充值</Button>
      </Card>
    </div>
  );
}

export default ExplorePage;